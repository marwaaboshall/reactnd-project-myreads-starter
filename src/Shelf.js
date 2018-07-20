import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired,
        shelfTitle: PropTypes.string.isRequired
    }
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books.map(book => <Book book={book} key={book.id} updateBookShelf={this.props.changeBookShelf}/>)}
                  </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;