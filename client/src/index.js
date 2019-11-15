import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


// We call this a “root” DOM node because everything inside it will be managed by React DOM
// https://reactjs.org/docs/rendering-elements.html
ReactDOM.render(<App />, document.getElementById("root"));

// Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
registerServiceWorker();
