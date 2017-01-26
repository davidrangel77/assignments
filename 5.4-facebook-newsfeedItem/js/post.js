import React from 'react'
import Comment from './comment'
import Footer from './footer'

export default React.createClass({
  getInitialState(){
    return {
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      name: "Jamie Long",
      date: "01/26/2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  },

  render (){
    return (
      <div className="articlesFeed">
        <article className="mainArticle">
          <div className="mainArticleHeader">
            <img src={this.state.image} alt="profilePic" className="profilePic"/>
            <div className="posterInfo">
            <h2 className="userName">{this.state.name}</h2>
            <h3 className="datePosted">{this.state.date}</h3>
            </div>
          </div>
          <div className="mainArticleText">
            <p>{this.state.text}
            </p>
          </div>
          <Footer/>
        </article>
        <Comment/>
      </div>
    )
  }
})
