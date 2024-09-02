// CommentItem component with changes

import './index.css'
// Importing formatDistanceToNow from date-fns to display relative time
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''

  // Keeping the original CSS classes intact
  const likeTextClassName = isLiked ? 'likeTagSelect' : 'likeTag'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  // Formatting the date to show how long ago the comment was posted
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="commentHeading">
        <div className={`commentHeadingInitial ${initialClassName}`}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="commentUserName">{name}</p>
            {/* Displaying the formatted time */}
            <p className="dateEle">{postedTime} ago</p>
          </div>
          <p className="userComment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="likeImage">
          <button
            className="favorite-icon-container"
            type="button"
            onClick={onClickLike}
          >
            <img src={likeImageUrl} alt="like" className="like" />
          </button>
          <p className={likeTextClassName}>Like</p>
        </div>
        <button
          className="favorite-icon-container"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete" // Added data-testid for testing purposes
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
