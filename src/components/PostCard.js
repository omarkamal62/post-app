import { Link } from "react-router-dom";
import laRambla from "../assets/imgs/LaRambla.jpg";
import classes from "./PostCard.module.css";

const PostCard = ({ post }) => {
  const postTitle =
    post.title.length > 25 ? post.title.slice(0, 20) + "..." : post.title;
  const postText =
    post.body.length > 100 ? post.body.slice(0, 80) + "..." : post.body;

  return (
    <Link className={classes.cardLink} to={`/${post.id}`}>
      <div className="card" style={{ width: "18rem", cursor: "pointer" }}>
        <img className="card-img-top" src={laRambla} alt="La Rambla" />
        <div className="card-body px-2 py-2">
          <h5 className="card-title">{postTitle}</h5>
          <p className="card-text">{postText}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
