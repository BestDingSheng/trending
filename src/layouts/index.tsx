import { IRouteComponentProps } from 'umi';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return <Container>{children}</Container>;
}
