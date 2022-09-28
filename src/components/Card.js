import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <>
        Nome:
        <p data-testid="name-card">
          { cardName }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        Descrição:
        <p data-testid="description-card">
          { cardDescription }
        </p>
        Atributo 1:
        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>
        Atributo 2:
        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>
        Atributo 3:
        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>
        Raridade:
        <p data-testid="rare-card">
          { cardRare }
        </p>
        Trunfo:
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
