import React from 'react'
import { ajax } from 'jquery'

export default React.createClass({

  componentDidMount (){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-chatApp",
      datatype: "json",
      success: this.initialJsonLoaded,
      error: this.jsonNotLoaded
    })
  },
  getInitialState (){
    return {
      userNames: "",
      chatMessages: "",
      chatJsonData: []
    }
  },
  initialJsonLoaded (response){
    var reversedJsonArray = response.reverse()
    this.setState({
      chatJsonData: reversedJsonArray
    })
  },
  onPostJsonLoaded (response){
    this.setState({
      chatJsonData: this.state.chatJsonData.concat(response)
    })
  },
  jsonNotLoaded (response){
    // need to enter error message here
  },
  onUserInputChange (e){
    // this is where the onChange input sets state for userName
    this.setState({userNames:e.target.value})
  },
  onMessageChange (e){
    // this is where the onChange input sets state for chatMessage
    this.setState({chatMessages:e.target.value})
  },
  onSubmitMessage (e){
    e.preventDefault()
    var currentUser = this.state.userNames;
    var currentMessage = this.state.chatMessages;
    var completeUserDisplay = currentUser + ": ";

    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-chatApp",
      datatype: "json",
      type: "POST",
      data: {
        currentUser: completeUserDisplay,
        currentMessage: currentMessage
      },
      success: this.onPostJsonLoaded,
      error: this.jsonNotLoaded
    })
  },
  onMessagesClear(e) {
    e.preventDefault()
    this.setState({chatJsonData:[]})
  },

  render (){
    return (
      <section className="chatAppBody">
        <div className="chatMessagesDisplay">
          {
            this.state.chatJsonData.map((currentPost, i)=>{
              return <p key={i} className="currentPost"> <span className="userNameStyle" >{currentPost.currentUser}</span> <span className="userMessageStyle">{currentPost.currentMessage}</span></p>
            })
          }
        </div>
        <form className="appForm">
          <input className="userNameInput" type="text" placeholder="User Name" onChange={this.onUserInputChange}/>
          <input className="messageText" type="text" placeholder="Message Text" onChange={this.onMessageChange}/>
          <input className="submitMessage" type="submit" onClick={this.onSubmitMessage}/>
          <input className="clearButton" type="button" value="clear" onClick={this.onMessagesClear}/>
        </form>
      </section>
    )
  }

})
