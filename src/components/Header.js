import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import classes from "./Header.module.css";
import PostModal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img
            src={logo}
            className={`navbar-brand img-fluid ${classes.logo}`}
            alt="logo"
          />
        </Link>

        <p className={classes.middle_text}>StarK</p>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setIsOpen((prevState) => (prevState = !prevState));
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${classes.navbar_links} ${
            isOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={classes.add_button}
              >
                Add Post
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <PostModal />
    </>
  );
};

export default Header;
