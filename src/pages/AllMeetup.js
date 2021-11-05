import React from "react";
import { useState, useEffect, useContext } from "react";
import FavouriteContext from "../store/Favourite-Context";
import FavouriteMeetup from "./FavouriteMeetup";

import MeetupList from "../components/meetups/MeetupList";
const AllMeetup = function (props) {
  const [meetupData, setMeetupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FavouriteCtx = useContext(FavouriteContext);

  useEffect(() => {
    // setIsLoading(true);
    fetch(
      "https://react-meetup-8c72a-default-rtdb.asia-southeast1.firebasedatabase.app/newMeetup.json"
    )
      .then((Response) => Response.json())
      .then((data) => {
        const meetupsD = [];

        for (const key in data) {
          let meetupItem = {
            id: key,
            ...data[key],
          };
          meetupsD.push(meetupItem);
        }
        setIsLoading(false);
        setMeetupData(meetupsD);
      });
  }, []);

  //   console.log(FavouriteList);

  if (isLoading)
    return (
      <section>
        <p>Loading Data...</p>
      </section>
    );
  //below runs first when isLoading===false and setMeetupData isn't completed yet
  return (
    <section>
      {/* {meetupData.length < 2 ? console.log("length 0") : console.log("Fine")} */}
      <h1>All Meetup Page</h1>
      <MeetupList data={meetupData} />
    </section>
  );
};
export default AllMeetup;
