import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rare: '',
      trunfo: false,
      isSaveButtonDisabled: 'false',
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const numMax = 90;
    const numMin = 0;
    const totalNum = 210;
    const validateName = name.length > 0;
    const validateDesc = description.length > 0;
    const validateImg = image.length > 0;
    const attrSum = Number(attr1) + Number(attr2) + Number(attr3) <= totalNum;
    const validateAtr1 = Number(attr1) >= numMin && Number(attr1) <= numMax;
    const validateAtr2 = Number(attr2) >= numMin && Number(attr2) <= numMax;
    const validateAtr3 = Number(attr3) >= numMin && Number(attr3) <= numMax;
    const resultado = validateName && validateDesc && validateImg && validateAtr1
    && validateAtr2
    && validateAtr3 && attrSum;
    return resultado;
  };

  render() {
    const { name, description, image, attr1, attr2, attr3, rare, trunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ !this.isSaveButtonDisabled() }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
        />
      </div>
    );
  }
}
export default App;
