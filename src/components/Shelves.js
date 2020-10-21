import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const SHELVES = [
  {
    title: "Currently Reading",
    id: "currentlyReading",
  },
  {
    title: "Want To Read",
    id: "wantToRead",
  },
  {
    title: "Read",
    id: "read",
  },
];

class Shelves extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          {SHELVES.map((item) => (
            <Shelf
              key={item.id}
              books={this.props.books.filter((book) => book.shelf === item.id)}
              onShelfChange={this.props.onShelfChange}
              title={item.title}
            />
          ))}
          
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Shelves;
