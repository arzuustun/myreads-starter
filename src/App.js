import React from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import SearchBooks from "./components/SearchBooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shelves from "./components/Shelves";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    this.getBook();
  }

  getBook = async () => {
    getAll().then((data) => {
      this.setState({ books: data });
    });
  };

  updateBookShelf = (book, shelf) => {
    const { books } = this.state;
    book.shelf = shelf;

    const findedBookIndex = books.findIndex(
      (stateBook) => stateBook.id === book.id
    );
    if (findedBookIndex === -1) books.push(book);
    else {
      if (shelf === "none") {
        books.splice(findedBookIndex, 1);
      } else books[findedBookIndex] = book;
    }

    update(book, shelf).then(() => {
      this.setState({ books });
    });
  };
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/">
              <Shelves
                books={this.state.books}
                onShelfChange={this.updateBookShelf}
              />
          </Route>
          <Route
            path="/search">
              <SearchBooks
                books={this.state.books}
                onShelfChange={this.updateBookShelf}
              />
           </Route>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
