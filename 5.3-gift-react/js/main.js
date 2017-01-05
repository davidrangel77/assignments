import React from 'react'

export default React.createClass({

  render (){
    return (
      <main className="main">
        <h2 className="h2">GIFTS TO BUY</h2>
        <form className="items__form">
          <input className="giftInputText" type="text"></input>
          <input className="addButton" type="submit"></input>
          <div className="listItems__div">
            <article className="listItem"></article>
            <article className="totalAmount">
              <p className="p totalTextOnly">Total</p>
              <p className="p">$</p>
              <p className="p__totalCost"></p>
            </article>
          </div>
        </form>
      </main>
    )
  }
})
