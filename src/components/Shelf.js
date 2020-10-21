 import React from "react";
 import Book from "./Book";
 
const Shelf=({title,books,onShelfChange})=>(
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
   
            <Book
              books={books}
              onShelfChange={onShelfChange}
            />
      
     </div>
   </div>
  
  
  );
  export default Shelf;
  

// class Shelf extends React.Component {
//   render() {
//     return (
//       <div className="bookshelf">
//         <h2 className="bookshelf-title">{this.props.title} </h2>
//         <div className="bookshelf-books">
          
//                 <Book
//                   books={this.props.books}
//                   onShelfChange={this.props.onShelfChange}
//                 />
             
//          </div>
//        </div>
//     );
//   }
// }
// export default Shelf;
