/// <reference path="index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import TestComponent from "components/tests/TestComponent";

ReactDOM.render(
	React.createElement(TestComponent, {content: "test abc"}),
	document.getElementById('content')
);
