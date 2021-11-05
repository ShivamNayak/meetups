import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// importing funcion FavouriteContextProvider, so have to be in { }
import { FavouriteContextProvider } from "./store/Favourite-Context";
ReactDOM.render(
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>,
  document.getElementById("root")
);
