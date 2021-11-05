import { createContext, useState } from "react";
const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetup) => {},
  removeFavourite: (meetupId) => {},
  checkIfFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setuserFavourites] = useState([]);

  const addFavoriteMeetupHandler = (meetup) =>
    setuserFavourites((prev) => prev.concat(meetup));

  const removeFromFavouritesHandler = (meetupId) =>
    setuserFavourites((prev) => prev.filter((item) => item.id !== meetupId));

  // some returns true if even one item satisfies the condition
  const itemIsFavouriteHandler = (meetupId) =>
    userFavourites.some((item) => item.id === meetupId);

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavoriteMeetupHandler,
    removeFavourite: removeFromFavouritesHandler,
    checkIfFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
