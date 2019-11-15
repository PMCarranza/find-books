import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// A class based component is JavaScript class. It extends React.Component, and its only required method is render().
// Class-based components give you a property called this.state to read state from and a method this.setState that lets you update it.  https://react.christmas/2017/16

// extends Component -> this line allows the Nav component to inhert everything that comes with a React component. This includes: state object, component lifecycle methods, and render() method
class Nav extends Component {
  // state object gets two key value pairs, open and width
  state = {
    // initial state of component set to false, I am trying to figure how this relates to toggleNav
    open: false,

    // The innerWidth property returns the width of a window's content area.
    // The window.innerWidth property is read only; it has no default value.
    // The innerWidth property is supported in any window object like a window, a frame, a frameset, or a secondary window. https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
    width: window.innerWidth
  };

  // updateWidth is a functional component
  //A Functional component is a regular pure JavaScript function that accepts props as its argument, and returns some JSX.  https://react.christmas/2017/16
  updateWidth = () => {

    // newState gets the value of width which contains the width of the window's content area
    const newState = { width: window.innerWidth };

    // if state.open is false and newState is larger than 991 newSate will be false
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    // if not setState to the newState
    this.setState(newState);
  };

  // this function allows the the links search and saved to become part of the toggler icon when the widow size is smaller than 794px
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.  https://reactjs.org/docs/react-component.html#componentdidmount
  // componentDidMount - React method
  // window - browser
  // The addEventListener() method attaches an event handler to an element without overwriting existing event handlers, in this case it takes in an event  and a function
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().  https://reactjs.org/docs/react-component.html#componentdidmount
  // componentDidMount - React method
  // window - browser
  // The addEventListener() method attaches an event handler to an element without overwriting existing event handlers, in this case it takes in an event  and a function
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button

          /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
          You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.
          based on the window size toggleNave is triggered
          style used when window is over 794px*/
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
        You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.
        style used when window is under 794px*/}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
                You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.
                based on the window size toggleNave is triggered*/
                onClick={this.toggleNav}
                // path/link to main page
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
                You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.
                based on the window size toggleNave is triggered*/
                onClick={this.toggleNav}
                // path/link to saved books
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export default is used to export a single class, function or primitive from a script file.
export default Nav;
