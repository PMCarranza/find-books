import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// A class based component is JavaScript class. It extends React.Component, and its only required method is render().
// Class-based components give you a property called this.state to read state from and a method this.setState that lets you update it.  https://react.christmas/2017/16
// extends Component -> this line allows the Saved component to inhert everything that comes with a React component. This includes: state object, component lifecycle methods, and render() method
// component names always start with a Capital letter, otherwise React treats them as DOM tags 
class Saved extends Component {
  // state object gets a key value pair
  state = {
    books: []
  };

  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.  https://reactjs.org/docs/react-component.html#componentdidmount
  // componentDidMount - React method
      // takes getSavedBooks function as a parameter
  componentDidMount() {
    this.getSavedBooks();
  }

  // makes axios call to DB and retrieves existing data and updates the dom by passing it to the books array
  // function declared in API.js able to used here because API is being imported
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
    )
      // catch error if one exists
      .catch(err => console.log(err));
  };

  // triggers function to delete books from saved by using the id
  // handles delete button
  handleBookDelete = id => {
      // makes axios call to DB and looks for the matching id to delete
      // function declared in API.js able to used here because API is being imported
    API.deleteBook(id).then(res => this.getSavedBooks());
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
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {/* removing the ? throws a parsaing error */}
              {/* I do not know if the ? is a placeholder for the number of elements in the array or if it is some sort of filter */}
              {this.state.books.length ? (
                <List>
                  {/* using the map method to traverse along the books data, passing it to the book parameter and rendering the results to each card using and <ul> and its <li> elements */}
                  {this.state.books.map(book => (
                    <Book
                      // use for saving/deleting/get books
                      key={book._id}
                      // rendered in a <h3>
                      title={book.title}
                      // rendered in a <h5>
                      subtitle={book.subtitle}
                      // rendered in the view button
                      link={book.link}
                      // rendered in a <p> above the image
                      authors={book.authors.join(", ")}
                      // rendered in a <p> next to the image
                      description={book.description}
                      // rendered in a <img>
                      image={book.image}
                      // delete button next to view button
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  // displays message at bottom if there are not books saved
                  <h2 className="text-center">No Saved Books</h2>
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
export default Saved;
