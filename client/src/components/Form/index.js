import React from "react";

// component names always start with a Capital letter, otherwise React treats them as DOM tags 
// passing the Form component props and deconstructing props object
// q will take the user input, book or author
// two other functions are the parameters passed to the Form props
// handleInputChange and handleFormSubmit come from Home.js
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          
          /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// export default is used to export a single class, function or primitive from a script file.
export default Form;
