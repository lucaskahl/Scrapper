import React from 'react';

import {
  Container, Menu, Informations, Search, Schedule,
} from './styles';

const Header = () => (
  <Container>
    <Informations>
      <Menu />
      <h4>Movies</h4>
      <Search />
    </Informations>
    <Schedule>
      <ul>
        <li>
          <a daily>Today</a>
        </li>
        <li>
          <a>Thursday</a>
        </li>
        <li>
          <a>Friday</a>
        </li>
        <li>
          <a>Saturday</a>
        </li>
      </ul>
    </Schedule>
  </Container>
);

export default Header;
