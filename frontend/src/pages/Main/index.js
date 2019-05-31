import React from 'react';

import Header from '../../components/Header';

import { Container, Movies, Information } from './styles';

const Main = () => (
  <>
    <Header />
    <Container>
      <Movies>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/A11Agdd1EQL._SL1500_.jpg"
          alt="Guardians of the galaxy poster"
        />
        <Information>
          <h3>Guardians of the Galaxy</h3>
          <p>PG-13 | 2h 16min | Action, Adventure, Sci-FI</p>
          <p>
            Director: <span>James Gunn</span>
          </p>
        </Information>
      </Movies>
    </Container>
  </>
);

export default Main;
