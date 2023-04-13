import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "bootstrap";

const PostModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const modalRef = useRef();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const post = {
      title: title,
      body: content,
      userId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    } else {
      document.getElementById("close-modal").click();

      navigate("");
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      data-bs-backdrop="static"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Post
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              id="close-modal"
              aria-label="Close"
              style={{ background: "none", border: "none" }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="post-title">Post title</label>
                <input
                  className="form-control"
                  id="post-title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="post-body">Post body</label>
                <textarea
                  className="form-control"
                  id="post-body"
                  placeholder="Content..."
                  rows="3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={title === "" || content === ""}
                className="mt-3 d-block mx-auto btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
