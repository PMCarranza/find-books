import React from "react";

// component names always start with a Capital letter, otherwise React treats them as DOM tags 
// passing the Card component props and deconstructing props object
// prop Card has three parameters
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
            You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>

      {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
      You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
      <div className="card-body">{children}</div>
    </div>
  );
}

// export default is used to export a single class, function or primitive from a script file.
export default Card;
