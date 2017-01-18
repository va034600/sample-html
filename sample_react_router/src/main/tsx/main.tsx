import * as React from "react";
import {render} from "react-dom";
import {IndexRoute, Router, Route, hashHistory} from "react-router";
import {AppComponent} from "./components/tests/AppComponent";
import {IndexComponent} from "./components/tests/IndexComponent";
import {AboutComponent} from "./components/tests/AboutComponent";
import {UsersComponent} from "./components/tests/UsersComponent";
import {UserComponent} from "./components/tests/UserComponent";
import {NoMatchComponent} from "./components/tests/NoMatchComponent";

render((
	<Router history={hashHistory}>
		<Route path="/" component={AppComponent}>
			<IndexRoute component={IndexComponent} />
			<Route path="about" component={AboutComponent}/>
			<Route path="users" component={UsersComponent}>
				<Route path="/user/:userId" component={UserComponent}/>
			</Route>
			<Route path="*" component={NoMatchComponent}/>
		</Route>
	</Router>
), document.querySelector('#content'));