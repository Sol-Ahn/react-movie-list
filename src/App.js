import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./components/page/MovieListPage/index";
import MovieDetailPage from "./components/page/MovieDetailPage/index";
import NotFound from "./components/UI/NotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/movie" component={MovieListPage} />
        <Route exact path="/movie/:id" component={MovieDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
