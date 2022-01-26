import { useState } from 'react';
import { useImmer } from 'use-immer';

const initState = {
  dataList: [],
  loading: false,
  error: false,
};

export default function optionsModel() {
  const [state, setState] = useImmer(initState);
  return {
    state,
    setState,
  };
}
