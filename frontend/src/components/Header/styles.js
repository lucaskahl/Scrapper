import styled from 'styled-components';

import SearchLogo from '../../assets/search.png';
import MenuLogo from '../../assets/menu.png';

export const Container = styled.div`
  background-color: #09212a;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);
`;

export const Informations = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    line-height: 80px;
  }
`;

export const Search = styled.div`
  background-image: url(${SearchLogo});
  background-size: 20px;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  cursor: pointer;
`;

export const Menu = styled.div`
  background-image: url(${MenuLogo});
  background-size: 20px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
  cursor: pointer;
`;
