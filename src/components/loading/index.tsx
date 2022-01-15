import styled from 'styled-components';
import { Spin } from 'antd';

const LoadingDiv = styled.div`
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
`;

const Loading = () => {
  return (
    <LoadingDiv>
      <Spin tip="数据加载中..."></Spin>
    </LoadingDiv>
  );
};

export default Loading;
