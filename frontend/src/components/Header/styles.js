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

export const Schedule = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  ul {
    display: flex;
    justify-content: space-around;
    margin-left: 5px;
    margin-right: 5px;

    list-style: none;

    li {
      a {
        font-size: ${props => (props.daily ? '20px' : '16px')};
        color: ${props => (props.daily ? '#fff' : '#666')};
      }
    }
  }
`;
