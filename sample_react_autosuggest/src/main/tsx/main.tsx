/// <reference path="index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./MainStore";
import {testComponent} from "./components/tests/TestComponent";

const TargetComponent = testComponent();

ReactDOM.render(
	<Provider store={store}>
		<TargetComponent />
	</Provider>,
	document.getElementById('content')
);
