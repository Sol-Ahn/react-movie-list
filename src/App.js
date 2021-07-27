import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./components/page/MovieListPage/index";
import MovieDetailPage from "./components/page/MovieDetailPage/index";
import MovieFormPage from "./components/page/MovieFormpage/index";
import NotFound from "./components/UI/NotFound";
import StyledHeader from "./components/UI/Header";
import StyledContent from "./components/UI/Content";
import "antd/dist/antd.css";
import { Layout } from "antd";

const App = () => {
	return (
		<Layout>
			<StyledHeader />
			<StyledContent>
				<Switch>
					<Route exact path="/" component={MovieListPage}></Route>
					<Route path="/detail/:id" component={MovieDetailPage}></Route>
					<Route path="/form" component={MovieFormPage}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</StyledContent>
		</Layout>
	);
};

export default App;
