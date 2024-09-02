import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

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
const initialCommentsList = []
class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  addCommnetBtn = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const count = commentsList.length
    return (
      <div className="appContainer">
        <div className="commentsContainer">
          <h1 className="heading">Comments</h1>
          <div className="addComments">
            <form className="inputComments" onSubmit={this.addCommnetBtn}>
              <p className="labelEle">Say something about 4.0 Technologies</p>
              <input
                value={name}
                id="comments"
                placeholder="Your Name"
                className="inputEle"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                rows="8"
                cols="50"
                placeholder="Your Comment"
                className="textareaEle"
                onChange={this.onChangeComment}
              />
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
            <p>{count} Comments</p>
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
