import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps (){
    return {
      contacts: [
        {
          name: "Amy Sims",
          email: "amy.sims63@example.com",
          phone: "(868)-894-3501",
          location: "Nashville, TN"
        },
        {
          name: "Bella Lee",
          email: "email@domain.com",
          phone: "208093843",
          location: "Austin, TX"
        },
        {
          name: "Roy Wheeler",
          email: "roy.wheeler80@example.com",
          phone: "(438)-370-9681",
          location: "Raleigh, NC"
        }
      ]
    }
  },

  render (){
    return (
      <div>
        <h2>Contact List</h2>
        {
          this.props.contacts.map(
            (contact, i)=>{
              return (
                <Link to={`${contact.name}/${contact.email}/${contact.phone}/${contact.location}`}key={i} className="contactLink">
                  {contact.name}
                </Link>
              )
            }
          )
        }
      </div>
    )
  }

})
