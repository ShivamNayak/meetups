import { useContext } from "react";
import classes from "../css/MeetupItem.module.css";
import Card from "../layout/Card";
import FavouriteContext from "../../store/Favourite-Context";
const MeetupItem = function (props) {
  const MeetupCtx = useContext(FavouriteContext);
  const ifFavourite = MeetupCtx.checkIfFavourite(props.id);

  const toggleFavouriteHandler = () => {
    ifFavourite
      ? MeetupCtx.removeFavourite(props.id)
      : MeetupCtx.addFavourite(props);
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteHandler}>
            {ifFavourite ? "Remove from Favourites" : "To favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
};
export default MeetupItem;
