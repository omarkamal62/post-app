import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import laRambla from "../assets/imgs/LaRambla.jpg";
import CommentCard from "../components/CommentCard";
import classes from "./Post.module.css";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const postId = params.postId;

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  const fetchPost = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    setPost(data);
    setIsLoading(false);
  };

  const fetchComments = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log("DATA", data);
    setComments(data);
    setIsLoading(false);
  };

  if (isLoading || !post) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.postPage}>
      <h1 className={classes.post_title}>{post.title}</h1>
      <img src={laRambla} alt="" className="img-fluid" />
      <p className={classes.postText}>{post.body}</p>
      <section className={classes.commentSection}>
        <h2 className={classes.commentsection_title}>Comments</h2>
        {comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
      </section>
    </div>
  );
};

export default PostPage;
