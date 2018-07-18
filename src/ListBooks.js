import React, { Component } from 'react';
import Shelf from './Shelf';

class ListBooks extends Component {
    render() {
        return(
            <div className="list-books-content">
            <div>
              <Shelf shelfTitle="Currently Reading" 
                      books={this.props.books.filter(book => book.shelf === "currentlyReading")} 
                      changeBookShelf={this.props.onUpdateShelf}/>
              <Shelf shelfTitle="Want To Read" 
                      books={this.props.books.filter(book => book.shelf === "wantToRead")} 
                      changeBookShelf={this.props.onUpdateShelf}/>
              <Shelf shelfTitle="Read" 
                      books={this.props.books.filter(book => book.shelf === "read")} 
                      changeBookShelf={this.props.onUpdateShelf}/>
            </div>
          </div>
        )
    }

}

export default ListBooks;