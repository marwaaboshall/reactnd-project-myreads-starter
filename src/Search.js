import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query: query});
        if(query) {
            BooksAPI.search(query).then((data) => {
                if(data.length) {
                    this.setState({
                        books: data
                    });
                    this.props.currentBooks.map((book) => {
                        data.forEach(element => {
                            console.log(element);
                            if(element.id === book.id) {
                                console.log("same");
                                element.shelf = book.shelf;
                            }
                        })
                    })
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
              {this.state.books.map(book => <Book book={book} 
                                              key={book.id} 
                                              updateBookShelf={this.props.changeBookShelf}/>)}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;