import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px;
  width: 100%;

  border: solid 2px #f3848c;
  border-radius: 6px;
  background-color: inherit;

  outline: none;

  font-size: 15px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #f3848c;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }

  @media screen and (max-width: 750px) {
    max-width: 100px;
  }

  @media screen and (min-width: 750.5px) {
    max-width: 200px;
  }
`;

export const FilterTitleStyled = styled.h3`
  margin-bottom: 30px;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
`;
