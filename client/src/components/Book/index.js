import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// component names always start with a Capital letter, otherwise React treats them as DOM tags 
// passing the Book component props and deconstructing props object
// q will take the user input, book or author
// prop Book has seven parameters
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>

          {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">

            {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
            You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
            {/* this button handles the link to the book "homepage" and sits next to the "save" button */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">

          {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">

          {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">

          {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// export default is used to export a single class, function or primitive from a script file.
export default Book;
