import React from "react";
import Book from "./Book";

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title} </h2>
        <div className="bookshelf-books">
          
                <Book
                  books={this.props.books}
                  onShelfChange={this.props.onShelfChange}
                />
             
         </div>
       </div>
    );
  }
}
export default Shelf;
