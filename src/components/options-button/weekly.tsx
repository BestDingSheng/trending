import react from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { useModel } from 'umi';

const Weekly = () => {
  const { search, setSearch } = useModel('optionsModel');
  function handleMenuClick(e) {
    const { key } = e;
    console.log('click', e);
    setSearch((draft) => {
      draft.range = key;
    });
  }
  const dateList = [
    { label: 'Yearly', value: 'yearly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Daily', value: 'daily' },
  ];

  const menu = (
    <Menu onClick={handleMenuClick}>
      {dateList.map((item) => {
        return <Menu.Item key={item.value}>{item.label}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button type="primary">range: {search.range}</Button>
    </Dropdown>
  );
};

export default Weekly;
