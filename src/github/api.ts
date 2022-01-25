import { Octokit } from '@octokit/core';
import dayjs from 'dayjs';
import { store } from 'shengjs';
import { useModel } from 'umi';

const { setLocal, getLocal } = store;

// 一分钟
const oneMinutes = 60 * 1000;
// 一小时
const oneHours = 60 * oneMinutes;

export type transformFilters = {
  language?: string;
  range?: string;
};
export type ghSearchQuery = {
  q: string;
  sort: 'stars';
  order: 'desc';
};

const getStart = (type: string = 'weekly') => {
  type = type || 'weekly';
  const range: any = {
    yearly: dayjs().subtract(1, 'year').format('YYYY-MM-DD'),
    monthly: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
    weekly: dayjs().subtract(1, 'week').format('YYYY-MM-DD'),
    daily: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
  };
  return range[type];
};

const transformQuery = (filters: transformFilters) => {
  const reposDate = `created:${getStart(filters.range)}..${dayjs().format(
    'YYYY-MM-DD',
  )}`;
  const reposLang =
    filters.language !== 'all_languages'
      ? `language:"${filters.language}" `
      : '';
  return encodeURIComponent(reposLang + reposDate);
};

export const useTrending = () => {
  const { search, setSearch } = useModel('optionsModel');
  const { state, setState } = useModel('globModel');
  const octokit = new Octokit({ auth: '' });
  const { language, range } = search;

  const req = async (data: any = {}) => {
    let query = { language: language, range: range };
    const q = transformQuery(query);
    const cacheResult = getLocal(q);
    if (cacheResult) {
      setState((draft) => {
        draft.dataList = cacheResult;
      });
      return false;
    }
    setState((draft) => {
      draft.loading = true;
    });

    try {
      const res = await octokit.request(`GET /search/repositories?q=${q}`, {
        sort: 'stars',
        order: 'desc',
      });

      console.log(res);
      console.log(
        res.headers['x-ratelimit-remaining'],
        'x-ratelimit-remaining',
      );
      console.log(res.data.items, 'res.data.items');

      if (res.data.items) {
        setLocal(q, res.data.items, oneHours);
        setState((draft) => {
          draft.loading = false;
          draft.dataList = res.data.items;
        });
      }
    } catch (error) {
      setState((draft) => {
        draft.loading = false;
      });
    }

    return [req];
  };
  return [req];
};
