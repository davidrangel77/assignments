import React from 'react'

export default React.createClass({
  getInitialState: function() {
    return {
      inputValue: '',
      priceValue: 0
    };
  },

  onADDButtonClick(e) {
    // this should return the text from the text input and append a new list item
    e.preventDefault();
    var currentInputValue = this.state.inputValue;
    var textInputArray = currentInputValue.split(",");
    var listTextElement = textInputArray[0];
    var priceElement = textInputArray[1];
    this.refs.listItems.insertAdjacentHTML("afterbegin",
    `<article class="listItem">
      <button class="circleButton" type="button" value="line"></button>
      <p class="listItem__text">${listTextElement}</p>
      <p class="priceElement" ref="priceElement">$${priceElement}</p>
      </article>`)

    this.refs.totalPrice.innerHTML = priceElement;
  },

  updateInputValue: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  },


  render (){
    return (
      <main className="main">
        <h2 className="h2">GIFTS TO BUY</h2>
        <form className="items__form">
          <input className="giftInputText" type="text" name="giftInput" placeholder="     name of gift, price" value={ this.state.inputValue } onChange={ this.updateInputValue }></input>
          <input className="addButton" type="submit" name="submitItemToList" value="ADD" onClick={ this.onADDButtonClick }></input>
          <div className="listItems__div" ref="listItems">
            <article className="totalAmount">
              <p className="p totalTextOnly">Total</p>
              <p className="p">$</p>
              <p className="p__totalCost" ref="totalPrice">0</p>
            </article>
          </div>
        </form>
      </main>
    )
  }
})
