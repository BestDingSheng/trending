import Languages from './languages';
import Weekly from './weekly';

import styled from 'styled-components';

const DivButton = styled.div`
  text-align: right;
  padding: 20px 0;
  button {
    margin-right: 10px;
  }
`;

const OptionsButton = () => {
  return (
    <DivButton>
      <Languages></Languages>
      <Weekly></Weekly>
    </DivButton>
  );
};

export default OptionsButton;
