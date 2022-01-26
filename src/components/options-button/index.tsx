import Languages from './languages';
import Weekly from './weekly';

import styled from 'styled-components';

const DivButton = styled.div`
  text-align: right;
  padding: 20px 0;
  button {
    margin-right: 10px;
  }
  /* sm */
  @media (max-width: 576px) {
    text-align: left;
    button {
      margin-bottom: 10px;
    }
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
