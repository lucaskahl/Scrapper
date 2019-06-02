import styled from 'styled-components';

import TicketLogo from '../../assets/ticket.png';

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

  img {
    width: 144px;
    height: 288px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
`;

export const TextInformation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  justify-content: center;
  padding: 50px 16px 50px 16px;
  border-radius: 1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 0.5px rgba(255, 255, 255, 0.04);
  background-color: rgba(29, 42, 48, 1);
  cursor: pointer;

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

export const VisualInformation = styled.div`
  position: relative;
`;

export const Ratio = styled.p`
  position: absolute;
  right: -12px;
  top: 5px;

  background-color: #ffc500;
  display: block;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  text-align: center;
  line-height: 28px;
  color: #000;
  font-size: 12px;
`;

export const Ticket = styled.a`
  cursor: pointer;
  content: '';
  position: absolute;
  display: block;
  width: 60px;
  height: 50px;
  background-color: #91413c;
  background-image: url(${TicketLogo});
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  bottom: -38px;
  right: 15px;
`;
