import React from 'react'
import Contact from './contact'

export default React.createClass({

  render (){
    return (
      <div>
        <section>
          <p>{this.props.params.name}</p>
          <p>{this.props.params.email}</p>
          <p>{this.props.params.phone}</p>
          <p>{this.props.params.location}</p>
        </section>
      </div>
    )
  }

})
