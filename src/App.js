import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./containers/MovieListPage/index";
import MovieDetailPage from "./containers/MovieDetailPage/index";
import MovieFormPage from "./containers/MovieFormpage/index";
import MovieEditPage from "./containers/MovieEditPage";
import NotFound from "./components/NotFound";
import StyledLayout from "./components/Layout";
import StyledHeader from "./components/Header";
import StyledContent from "./components/Content";
import "antd/dist/antd.css";

const App = () => {
  return (
    <StyledLayout>
      <StyledHeader />
      <StyledContent>
        <Switch>
          <Route exact path="/" component={MovieListPage}></Route>
          <Route exact path="/detail/:id" component={MovieDetailPage}></Route>
          <Route path="/detail/:id/edit" component={MovieEditPage}></Route>
          <Route exact path="/form" component={MovieFormPage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </StyledContent>
    </StyledLayout>
  );
};

export default App;
