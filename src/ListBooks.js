import React, { Component } from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      onUpdateShelf: PropTypes.func.isRequired
    }
    render() {
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
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
          <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }

}

export default ListBooks;