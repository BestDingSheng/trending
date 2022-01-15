import { useImmer } from 'use-immer';

const initState = {
  language: '',
  range: 'weekly',
};

export default function optionsModel() {
  const [search, setSearch] = useImmer(initState);
  return {
    search,
    setSearch,
  };
}
