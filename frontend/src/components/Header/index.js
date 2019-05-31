import React from 'react';

import {
  Container, Menu, Informations, Search,
} from './styles';

const Header = () => (
  <Container>
    <Informations>
      <Menu />
      <h4>Movies</h4>
      <Search />
    </Informations>
  </Container>
);

export default Header;
