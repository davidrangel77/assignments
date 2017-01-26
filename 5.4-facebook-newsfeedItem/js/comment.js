import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      name: "Lewis Oliver",
      time: "2:26pm",
      date: "01/26/2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },

  render (){
    return (
      <article className="newComment">
        <img src={this.state.image}
          alt="profilePic"
          className="profilePicSmall"/>
        <p className="commentText">
          <b className="commenterName">{this.state.name}
          </b>  {this.state.text}
        </p>
        <p className="commentTimeDate"><b>{this.state.time}</b><em> {this.state.date}</em></p>
      </article>
    )
  }
})
