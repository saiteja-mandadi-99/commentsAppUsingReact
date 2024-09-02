import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], count: 0, name: '', comment: ''}
  render() {
    const {commentsList, count} = this.state
    return (
      <div className="appContainer">
        <div className="commentsContainer">
          <h1 className="heading">Comments</h1>
          <div className="addComments">
            <form className="inputComments">
              <p className="labelEle">Say something about 4.0 Technologies</p>
              <input
                id="comments"
                placeholder="Your Name"
                className="inputEle"
              />
              <textarea
                rows="8"
                cols="50"
                placeholder="Your Comment"
                className="textareaEle"
              ></textarea>
              <button type="submit" className="buttonEle">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="imageEle"
            />
          </div>

          <hr className="hrEle" />
          <div className="commentsDetailsContainer">
            <p>{count}Comments</p>
            <ul className="listContainer">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
