import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import classes from "./Home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    setPosts(data);
  };

  return (
    <div className="container">
      <h1 className={classes.page_title}>Home</h1>
      <div className="row">
        {posts.map((post) => {
          return (
            <div key={post.id} className="col-lg-3 col-sm-6 col-12 mb-4">
              <PostCard post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
