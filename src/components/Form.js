import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea data-testid="description-input" type="text" />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image" type="text">
          Imagem:
          <input data-testid="image-input" />
        </label>
        <label htmlFor="isRare">
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="superTryunfo">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>

      </form>
    );
  }
}

export default Form;
