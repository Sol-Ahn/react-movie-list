import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./components/page/MovieListPage/index";
import MovieDetailPage from "./components/page/MovieDetailPage/index";
import NotFound from "./components/UI/NotFound";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={MovieListPage}></Route>
          <Route path="/detail/:id" component={MovieDetailPage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
