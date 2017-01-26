import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      comments:
      [
        {
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          name: "Lewis Oliver",
          time: "2:26pm",
          date: "01/26/2017",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          name: "Riley Cruz",
          time: "3:45pm",
          date: "01/26/2017",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          name: "Clifton Pearson",
          time: "6:24pm",
          date: "01/26/2017",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    }
  },

  render (){
    return (
      <div>
        {
          this.state.comments.map((currentComment, i)=>{
            return (
              <div key={i}>
                <article className="newComment">
                  <img src={currentComment.image}
                    alt="profilePic"
                    className="profilePicSmall"/>
                  <p className="commentText">
                    <b className="commenterName">{currentComment.name}
                    </b>  {currentComment.text}
                  </p>
                  <p className="commentTimeDate"><b>{currentComment.time}</b><em> {currentComment.date}</em></p>
                </article>
              </div>
            )
        })
      }
    </div>
    )
  }
})
