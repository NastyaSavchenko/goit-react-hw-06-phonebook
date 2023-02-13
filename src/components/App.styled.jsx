import styled from 'styled-components';

import bg from '../img/notebook.jpg';

export const Main = styled.main`
  margin: 50px;
  display: flex;
  width: 100%;
`;

export const AppStyled = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  text-align: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('${bg}');
`;
