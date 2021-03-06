/// <reference path="index.d.ts" />

import "babel-polyfill";
import 'whatwg-fetch';

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {testComponent} from "components/tests/TestComponent";
import {createMainStore} from "MainStore";

const store = createMainStore();
const TargetComponent = testComponent();

ReactDOM.render(
	<Provider store={store}>
		<TargetComponent />
	</Provider>,
	document.getElementById('content')
);
