import React from "react";
import { search } from "../BooksAPI";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      bookQuery: "",
      bookFound: [],
    };
  }
  searchApi = () => {
    if (this.state.bookQuery !== "") {
      search(this.state.bookQuery).then((query) => {
        if (query.error !== "empty query") this.setState({ bookFound: query });
      });
    } 
  };

  updateBookQuery = (bookQuery) => {
    this.setState(
      {
        bookQuery: bookQuery,
      },
      () => {
        this.searchApi();
      }
    );
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.bookQuery}
              placeholder="Search by title or author"
              onChange={(event) => this.updateBookQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {
            <Book
              books={this.state.bookFound}
              onShelfChange={this.props.onShelfChange}
            />
          }
        </div>
      </div>
    );
  }
}

export default SearchBooks;
