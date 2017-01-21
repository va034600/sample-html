/// <reference path="index.d.ts" />

import "babel-polyfill";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {testComponent} from "components/tests/TestComponent";
import store from "MainStore";

const TargetComponent = testComponent();

ReactDOM.render(
	<Provider store={store}>
		<TargetComponent />
	</Provider>,
	document.getElementById('content')
);
