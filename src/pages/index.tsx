import React, { useEffect, Fragment } from 'react';
import { useModel } from 'umi';
import OptionsButton from '@/components/options-button';
import { useTrending } from '@/github';
import TopNav from '@/components/top-nav';
import Loading from '@/components/loading';
import Token from '@/components/token';
import Grid from '@/components/grid'


export default function IndexPage() {
  const { state, setState } = useModel('globModel');
  const { search, setSearch } = useModel('optionsModel');

  const { language, range } = search;
  const { dataList, loading } = state;
  const [fetch] = useTrending();
  useEffect(() => {
    fetch();
  }, [range, language]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <Fragment>
      <OptionsButton></OptionsButton>
      <Token></Token>
      <Grid dataList={dataList} ></Grid>
    </Fragment>
  );
}
