import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails
  const initial = name.slice(0, 1).toUpperCase() // Corrected from splice to slice

  return (
    <li>
      <div className="commentHeading">
        <div className="commentHeadingInitial">
          <p>{initial}</p>
        </div>
        <h1 className="commentUserName">{name}</h1>
        <p className="dateEle">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="userComment">{comment}</p>
      <div className="like-delete-container">
        <div className="likeImage">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="Like"
            className="like"
          />
          <p className="likeTagSelect">Like</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete"
        />
      </div>
    </li>
  )
}

export default CommentItem
