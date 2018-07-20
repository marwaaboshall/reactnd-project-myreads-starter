import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query: '',
        books: []
    }

    static propTypes = {
        currentBooks: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired
    }

    updateQuery = (query) => {
        this.setState({ query: query });
        if(query) {
            BooksAPI.search(query).then((data) => {
                if(data.length) {
                    let filteredBooks = data.map(book => {
                        let currentBook = this.props.currentBooks.filter(
                            b => b.id === book.id
                        )[0];
                        if(currentBook) {
                            book.shelf = currentBook.shelf;
                        }
                        return book;
                    });
                    if(this.state.books !== filteredBooks) {
                        this.setState({ books: filteredBooks });
                    }
                }
                else {
                    this.setState({ books:[] });
                }
            });
        } else {
            this.setState({ books:[] })
        }
    }
  
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={this.state.query} 
                       onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.map(book => 
                 <Book
                    book={book} 
                    key={book.id} 
                    updateBookShelf={this.props.changeBookShelf}/>)}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;