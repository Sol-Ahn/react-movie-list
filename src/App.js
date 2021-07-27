import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MovieListPage from "./components/page/MovieListPage/index";
import MovieDetailPage from "./components/page/MovieDetailPage/index";
import MovieFormPage from "./components/page/MovieFormpage/index";
import NotFound from "./components/UI/NotFound";
import StyledHeader from "./components/UI/Header";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      {/* 1. 헤더 부분은 Header.js 컴포넌트 안에 따로 빼주는게 깔끔할거 같아요! */}
      <StyledHeader>
        <Link to="/">
          <span className="logo">My Movies</span>
        </Link>
      </StyledHeader>
      {/* 2. 통일성을 위해 StyledContent로 style을 빼주면 어떨까요? */}
      <Content style={{ paddingTop: "5%", maxWidth: "80%", margin: "0 auto" }}>
        <Switch>
          <Route exact path="/" component={MovieListPage}></Route>
          <Route path="/detail/:id" component={MovieDetailPage}></Route>
          <Route path="/form" component={MovieFormPage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default App;
