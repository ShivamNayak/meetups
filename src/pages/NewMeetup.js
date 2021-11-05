import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router";
const NewMeetup = function (props) {
  const history = useHistory();
  const addMeetupHandler = (newMeetUpData) => {
    // console.log(newMeetUpData);
    fetch(
      "https://react-meetup-8c72a-default-rtdb.asia-southeast1.firebasedatabase.app/newMeetup.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetUpData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => history.replace("/"));
  };
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetup;
