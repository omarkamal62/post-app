import classes from "./CommentCard.module.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="card mb-2" style={{ maxWidth: "500px" }}>
      <div className="card-header">{comment.name}</div>
      <div className="card-body">
        <h5 className="card-title">{comment.email}</h5>
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
