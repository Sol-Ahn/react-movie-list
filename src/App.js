import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./components/page/MovieListPage/index";
import MovieDetailPage from "./components/page/MovieDetailPage/index";
import NotFound from "./components/UI/NotFound";
import StyledHeader from "./components/UI/Header";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Content } = Layout;

const App = () => {
	return (
		<Layout>
			<StyledHeader>
				<div className="logo">My Movies</div>
			</StyledHeader>
			<Content style={{ paddingTop: "5%" }}>
				<Switch>
					<Route exact path="/" component={MovieListPage}></Route>
					<Route path="/detail/:id" component={MovieDetailPage}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</Content>
		</Layout>
	);
};

export default App;
