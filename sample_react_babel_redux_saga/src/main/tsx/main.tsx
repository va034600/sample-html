/// <reference path="index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {test6} from "components/tests/Test6Component";
import store from "MainStore";

const TargetComponent = test6();

ReactDOM.render(
	<Provider store={store}>
		<TargetComponent />
	</Provider>,
	document.getElementById('content')
);
