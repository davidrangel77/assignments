import React from 'react'
export default React.createClass({

  render (){
    return (
      <section className="chatAppBody">
        <div className="chatMessagesDisplay">
        </div>
        <form>
          <input className="userNameInput" type="text" placeholder="User Name"/>
          <textarea className="messageText" type="text" placeholder="Message Text"/>
          <input className="submitMessage" type="submit"/>
        </form>
      </section>
    )
  }

})
