import React from "react";

// footer component
function Footer() {
  return (
    <footer>
      <hr />
      {/* the className attribute is used to specify a CSS clss. This applies to all regular DOM and SVG elements like <div>, <a>, and others. */}
      <p className="pull-right">
        {/* <i/> is adding the github cat */}
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

// export default is used to export a single class, function or primitive from a script file.
export default Footer;
