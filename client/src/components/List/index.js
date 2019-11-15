import React from "react";
import "./style.css";

// component names always start with a Capital letter, otherwise React treats them as DOM tags
// This component exports both the List and ListItem components
// Named export are used to export multiple things from a module by adding the keyword export to their declaration, function Container is declared and readied for export at the same time with two parameters
export const List = ({ children }) => (
  // children in the unordered list is the results retrieved from the query
  <ul className="list-group">
    {children}
  </ul>
);

// Named export are used to export multiple things from a module by adding the keyword export to their declaration, function Container is declared and readied for export at the same time with two parameters
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
