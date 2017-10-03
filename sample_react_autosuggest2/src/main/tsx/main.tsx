/// <reference path="index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {testComponent} from "./component/TestComponent";
import {createMainStore} from "./MainStore";

const TargetComponent = testComponent();

ReactDOM.render(
	<Provider store={createMainStore()}>
		<TargetComponent />
	</Provider>,
	document.getElementById('content')
);
