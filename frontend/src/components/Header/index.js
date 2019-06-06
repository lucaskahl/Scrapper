import React from 'react';

import {
  Container, Menu, Informations, Search, Schedule, Week,
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
          <Week daily>Today</Week>
        </li>
        <li>
          <Week>Thursday</Week>
        </li>
        <li>
          <Week>Friday</Week>
        </li>
        <li>
          <Week>Saturday</Week>
        </li>
      </ul>
    </Schedule>
  </Container>
);

export default Header;
