import { Row, Col } from 'antd';
import GridItem from '@/components/grid/item';

const Grid = (props) => {
  const { dataList = [] } = props;
  return (
    <Row gutter={16}>
      {dataList.map((item) => {
        return (
          <Col className="gutter-row" span={8} key={item.id}>
            <GridItem repository={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Grid;
