import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class Shelves extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
         
              <Shelf
                key="currentlyReading"
                books={this.props.books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                onShelfChange={this.props.onShelfChange}
                title="Currently Reading"
              />
              <Shelf
                key="wantToRead"
                books={this.props.books.filter(
                  (book) => book.shelf === "wantToRead"
                )}
                onShelfChange={this.props.onShelfChange}
                title="Want to Reading"
              />
              <Shelf
                key="read"
                books={this.props.books.filter((book) => book.shelf === "read")}
                onShelfChange={this.props.onShelfChange}
                title="Read"
              />
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
