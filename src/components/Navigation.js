import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import squirtle from '../../public/squirtle.png';

function Navigation() {
  return (
    <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width='30' className='me-2' />
          Pokeverse
        </Navbar.Brand>

        <Nav className='me-auto'>
          <Nav.Link as='div'>
            <NavLink to='/'>All Pokemon</NavLink>
          </Nav.Link>

          <Nav.Link as='div'>
            <NavLink to='/favorites'>My Deck</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };
