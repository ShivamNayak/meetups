import React, { useContext } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import FavouriteContext from "../store/Favourite-Context";
const FavouriteMeetup = function (props) {
  const FavouriteCtx = useContext(FavouriteContext);
  const FavouriteList = FavouriteCtx.favourites;
  return (
    <div>
      <h1 align="center">Favourite Meetup Page</h1>
      <ul>
        {FavouriteCtx.totalFavourites > 0 ? (
          FavouriteList.map((d) => (
            <MeetupItem
              key={d.id}
              id={d.id}
              title={d.title}
              // we save image url in meetupList as img but in the database, its imagUrl, hence if it would be the same, we could have just imported MeetupList component and would have simply pass the FavouriteList as <MeetupList data = {FavouriteList} />, in MeetupList => img={d.imageUrl}
              img={d.img}
              address={d.address}
              description={d.description}
            />
          ))
        ) : (
          <h2 align="center">No Favourites for now!</h2>
        )}
      </ul>
    </div>
  );
};
export default FavouriteMeetup;
