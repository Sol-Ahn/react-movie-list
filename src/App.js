import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./containers/MovieListPage/index";
import MovieDetailPage from "./containers/MovieDetailPage/index";
import MovieFormPage from "./containers/MovieFormpage/index";
import NotFound from "./components/NotFound";
import StyledHeader from "./components/Header";
import StyledContent from "./components/Content";
import "antd/dist/antd.css";
import { Layout } from "antd";

const App = () => {
  return (
    <Layout className="layout">
      <StyledHeader />
      <StyledContent>
        <Switch>
          <Route exact path="/" component={MovieListPage} />
          <Route path="/detail/:id" component={MovieDetailPage} exact />
          <Route path="/detail/:id/edit" component={MovieFormPage} exact />
          <Route component={NotFound} />
        </Switch>
      </StyledContent>
    </Layout>
  );
};

export default App;
