import {Alert, Button} from 'antd'
import styled from 'styled-components';
import { history } from 'umi';

const Container = styled.div`
    text-align: center;
    font-weight: 600;
    color: #2ba723;
`

export default function IndexPage() {

    const btnClick = () => {
      history.push('/token')
    }

    const dom = (
        <Container>
          Make sure to
          <strong className='ml-1 mr-1'>
            <Button type="link" onClick={btnClick}>add a token</Button>
          </strong>
          to avoid hitting the rate limit
        </Container>
      )
  return (
    <Alert type='info' message={dom} style={{marginBottom: '10px'}}></Alert>
  );
}
