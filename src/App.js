import { Route, Switch } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import FavouriteMeetup from "./pages/FavouriteMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>
        <Route path="/NewMeet/">
          <NewMeetup />
        </Route>
        <Route path="/Favourites">
          <FavouriteMeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
