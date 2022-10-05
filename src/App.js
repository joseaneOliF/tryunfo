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
      saveButtonClick: [],
      hasTrunfo: false,
      // playingCards: [],
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

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { name, description, image, attr1, attr2, attr3, rare,
      trunfo } = this.state;
    const newInfos = { name, description, image, attr1, attr2, attr3, rare };
    this.setState((prevState) => ({
      saveButtonClick: [...prevState.saveButtonClick, newInfos],
      name: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'normal',
    }));
    if (trunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  };

  render() {
    const { name, description, image, attr1, attr2, attr3, rare, trunfo,
      hasTrunfo, saveButtonClick } = this.state;
    // console.log(playingCards);
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
        { saveButtonClick.map((el, i) => (
          <li key={ i }>
            <Card
              cardName={ el.name }
              cardDescription={ el.description }
              cardAttr1={ el.attr1 }
              cardAttr2={ el.attr2 }
              cardAttr3={ el.attr3 }
              cardImage={ el.image }
              cardRare={ el.rare }
              cardTrunfo={ el.trunfo }
            />
          </li>
        ))}
        <ul />

      </div>
    );
  }
}
// commit vazio
export default App;
