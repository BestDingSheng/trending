import react from 'react';
import { newlanguages } from '@/github';
import { Button, Dropdown, Menu } from 'antd';
import { useModel } from 'umi';

const Languages = () => {
  const { search, setSearch } = useModel('optionsModel');

  function handleMenuClick(e) {
    const { key } = e;
    console.log('click', e);
    setSearch((draft) => {
      draft.language = key;
    });
  }

  const dateList = newlanguages;

  const menu = (
    <Menu onClick={handleMenuClick}>
      {dateList.map((item) => {
        return <Menu.Item key={item.value}>{item.title}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button type="primary">
        Languages: {search.language || 'All Language'}
      </Button>
    </Dropdown>
  );
};

export default Languages;
