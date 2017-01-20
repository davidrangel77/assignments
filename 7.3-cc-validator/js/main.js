import React from 'react'
import Validator from 'validator'

export default React.createClass({

  getInitialState(){
    return {
      isCreditCardValid: false,
      validityOutput: "",
      currentCardInput: ""
    }
  },
  onCreditCardChange (e){
    var newCardInput = e.target.value;
    this.setState({currentCardInput:newCardInput})
  },
  isThisCardValid(e){
    e.preventDefault();
    var validCard = Validator.isCreditCard(this.state.currentCardInput);
    this.setState({isCreditCardValid:validCard})

    if (validCard === false){
      return this.setState({validityOutput:"Hell No!"})
    } else {
      return this.setState({validityOutput:"Good To Go!"})
    }
  },
  render (){
    return (
      <form>
        <h3>Enter Card Number Here</h3>
        <input type="text" pattern="[0-9]{13,16}" maxLength="16" onChange={this.onCreditCardChange} required/>
        <input type="submit" onClick={this.isThisCardValid}/>
        <h3> Is this card valid?</h3>
        <h2 className={this.state.isCreditCardValid ? "valid" : "invalid"}>{this.state.validityOutput}</h2>
      </form>
    )
  }
})
