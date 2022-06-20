import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';
import { PokemonCard } from '../components';
import { Container, Row, Col } from 'react-bootstrap';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Row className='g-4'>
        {favorites.map((name) => (
          <Col key={name}>
            <PokemonCard name={name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Favorites };
