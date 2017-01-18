import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render (){
    return (
      <div>
        <h2>Contact</h2>
        <section>
          <p>{this.props.params.name}</p>
          <p>{this.props.params.email}</p>
          <p>{this.props.params.phone}</p>
          <p>{this.props.params.location}</p>
        </section>
        <Link to={`/`}>Back to Contacts</Link>
      </div>
    )
  }

})
