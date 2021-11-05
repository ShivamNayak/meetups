import { Link } from "react-router-dom";
import classes from "../css/MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup link</Link>
          </li>
          <li>
            <Link to="/NewMeet">New Meetup link</Link>
          </li>
          <li>
            <Link to="/Favourites">Favourite Meetup link</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
