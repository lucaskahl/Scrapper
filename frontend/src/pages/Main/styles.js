import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Movies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px;
  cursor: pointer;

  img {
    width: 144px;
    height: 288px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  justify-content: center;
  padding: 50px 16px 50px 16px;
  border-radius: 1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 0.5px rgba(255, 255, 255, 0.04);
  background-color: #1d292e;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;

    span {
      font-weight: 200;
    }
  }
`;
