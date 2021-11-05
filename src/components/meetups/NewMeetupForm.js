import Card from "../layout/Card";
import classes from "../css/NewMeetupForm.module.css";
import { useRef } from "react";

const NewMeetupForm = function (props) {
  const titleReference = useRef();
  const imageReference = useRef();
  const addressReference = useRef();
  const descriptionReference = useRef();
  const favouriteReference = useRef();

  const submitHandler = (event) => {
    const enteredTitle = titleReference.current.value;
    const enteredImageUrl = imageReference.current.value;
    const enteredAddress = addressReference.current.value;
    const enteredDescription = descriptionReference.current.value;
    let enteredFavourite = favouriteReference.current.value;
    if (favouriteReference.checked) enteredFavourite = true;
    else enteredFavourite = false;
    console.log("fav: " + enteredFavourite);
    const enteredMeetupDetails = {
      title: enteredTitle,
      imageUrl: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddNewMeetup(enteredMeetupDetails);
    event.preventDefault();
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleReference} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Image</label>
          <input type="url" required id="image" ref={imageReference} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressReference} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionReference}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="favourite">Mark Favourite</label>
          <input
            type="checkbox"
            id="fav"
            ref={favouriteReference}
            checked="checked"
          ></input>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
