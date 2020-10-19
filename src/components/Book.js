import React from 'react';
import PropTypes from "prop-types";
class Book extends  React.Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange:PropTypes.func.isRequired
      };
    
    // state={
    //     shelf:this.props.books.shelf?this.props.books.shelf :'none'
    // }
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);      }


    handleChange=(targetShelf,bookObject)=>{
        console.log(targetShelf)
        console.log(bookObject)
        this.props.onShelfChange(bookObject,targetShelf)
 
    }
render()
{
   
    return(
        <ol className="books-grid">  
         {this.props.books.map((book) =>
              <li key={`${book.id}`} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
                    }}
                  />
       
                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : 'none'} onChange={e=> this.handleChange(e.target.value,book)}>
                  
                      <option value='moveTo' disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>

                </div>
                <div className="book-title">
                  {book.title}
                </div>
                {book.authors &&
                <div className="book-authors">
                    {book.authors.map((author, index)=>  
                      <div key={index} className="book-authors">
                      {author}
                     </div>
                    )}
                  
                </div>}
              </li>
            )}
      </ol>
    )
}

}

export default Book;