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
			<StyledHeader>
				<Link to="/">
					<span className="logo">My Movies</span>
				</Link>
			</StyledHeader>
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
