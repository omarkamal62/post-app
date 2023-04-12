import logo from "../assets/imgs/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src={logo}
        className={`navbar-brand img-fluid ${classes.logo}`}
        alt="logo"
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <p className={classes.middle_text}>StarK</p>

      <div
        className={`collapse navbar-collapse ${classes.navbar_links}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className={classes.add_button}>Add Post</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
