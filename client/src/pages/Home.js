// import react because it must be in the scope when using JSX
// decsontruct Component from the react library so that we can extend component in our class declaration
import React, { Component } from "react";

// imports Jumbotron component to be render on Home screen
import Jumbotron from "../components/Jumbotron";

// imports component containing icon, title and children
import Card from "../components/Card";

// imports component that handles query, input change and submit form
import Form from "../components/Form";

// imports component containing title, subtitle, authors, link description, image and button data
import Book from "../components/Book";

// imports footer
import Footer from "../components/Footer";

// imports api call to google books using title as the query parameter, api.js also saves/deletes books from DB and handles the retrieval of saved books, 
import API from "../utils/API";

// imports component that allows us to use a bootstrap container for displaying the books
import { Col, Row, Container } from "../components/Grid";

// importing component containing <ul> and <li> elements
import { List } from "../components/List";

// utilize the javascript es6 class method in order to declare a class component named Home
// extends Component -> this line allows the Home component to inhert everything that comes with a React component. This includes: state object, component lifecycle methods, and render() method
class Home extends Component {
  // creating state object
  state = {
    // declaring empty array of books
    books: [],
    // query is an empty string
    q: "",
    // message to be displayed while  for a book
    message: "Search For A Book To Begin!"
  };


  // arrow function
  handleInputChange = event => {
    // console.log(event.target);
    // deconstructing event.target from the form tag in the form component
    // this is user input
    const { name, value } = event.target;
    // sets state to the query input
    this.setState({
      [name]: value
    });
  };

  // function get books makes the call to the googlebooks api and passes the user input as a query, axios is used to make the call
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        // updates state, passing response from api to books
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        //  or displays a message if no new books are found
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
    );
  };

  // this function retrieves the books
  handleFormSubmit = event => {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // handles the search button
    // in this case the page is prevented from immediately refreshing itself after rendering results
    event.preventDefault();
    // triggers getBooks function from API.js
    this.getBooks();
  };

  // function uses the book id to look for book in DB
  handleBookSave = id => {
    // The find() method returns the value of the first element in an array that pass a test (provided as a function)  https://www.w3schools.com/jsref/jsref_find.asp
    // const book gets the value of the book in the array 'books' that matches the id passed in the parameter
    // handles save button
    const book = this.state.books.find(book => book.id === id);

    // api call to save book &
    // key value pairs to be saved with each book all of these are part of the data retrieved from the googlebooks api
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
      // call to api to get the books for the DB
    }).then(() => this.getBooks());
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                /* The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.
                You need them when you want to use a JavaScript expression like a variable or a reference inside JSX.*/
                // function that handles the user input for a book
                handleInputChange={this.handleInputChange}
                // handles the click on the search button
                handleFormSubmit={this.handleFormSubmit}
                // name of book to serch
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* removing the ? throws a parsaing error */}
              {/* I do not know if the ? is a placeholder for the number of elements in the array or if it is some sort of filter */}
              {this.state.books.length ? (
                <List>
                  {/* using the map method to traverse along the books data, passing it to the book parameter and rendering the results to each card using and <ul> and its <li> elements */}
                  {this.state.books.map(book => (
                    <Book
                      // use for saving/deleting/get books
                      key={book.id}
                      // rendered in a <h3>
                      title={book.volumeInfo.title}
                      // rendered in a <h5>
                      subtitle={book.volumeInfo.subtitle}
                      // rendered in the view button
                      link={book.volumeInfo.infoLink}
                      // rendered in a <p> above the image
                      authors={book.volumeInfo.authors.join(", ")}
                      // rendered in a <p> next to the image
                      description={book.volumeInfo.description}
                      // rendered in a <img>
                      image={book.volumeInfo.imageLinks.thumbnail}
                      // save button next to view button
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  // displays message at bottom before a search has been made
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export default is used to export a single class, function or primitive from a script file.
export default Home;
