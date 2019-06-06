import styled from 'styled-components';

export const Container = styled.div``;

export const Trailer = styled.div`
  min-height: 20vh;

  img {
    width: 100%;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;

export const VisualInformation = styled.div`
  img {
    max-width: 150px;
    margin-top: -40px;
    border-radius: 3px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  }
`;

export const TextInformation = styled.div`
  margin-left: 16px;
  margin-top: 16px;

  h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 8px;

    span {
      font-weight: 200;
    }
  }
`;
