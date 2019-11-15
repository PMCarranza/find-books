import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
// Named export are used to export multiple things from a module by adding the keyword export to their declaration, function Container is declared and readied for export at the same time with two parameters
export function Container({ fluid, children }) {

  /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
  You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
// Named export are used to export multiple things from a module by adding the keyword export to their declaration, function Row is declared and readied for export at the same time with two parameters
export function Row({ fluid, children }) {

  /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
  You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Named export are used to export multiple things from a module by adding the keyword export to their declaration, function Col is declared and readied for export at the same time with two parameters
// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        // .map(), method used to traverse and display a list of similar objects of a component. A map is not the feature of React. Instead, it is the standard JavaScript function that could be called on any array. The map() method creates a new array by calling a provided function on every element in the calling array. https://www.javatpoint.com/react-map  
        .map(size => "col-" + size)
        .join(" ")}
    >

      {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
        You need them when you want to use a JavaScript expression like a variable or a reference inside JSX. */}
      {children}
    </div>
  );
}
