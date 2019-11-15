import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  // the children are the two lines of text inside the jumbotron div
  return <div className="jumbotron mt-4">{children}</div>;
}

// export default is used to export a single class, function or primitive from a script file.
export default Jumbotron;
