import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieListPage from "./components/page/MovieListPage/index";
import MovieDetailPage from "./components/page/MovieDetail/MovieDetailPage";
import NotFound from "./components/UI/NotFound";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={MovieListPage}></Route>
				<Route path="/detail" component={MovieDetailPage}></Route>
				<Route component={NotFound}></Route>
			</Switch>
		</div>
	);
}

export default App;
