import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query: '',
        books: []
    }

    searchForBooks = (query) => {
        let books = [];
        if(query) {
            //const match = new RegExp(escapeRegExp(query), 'i');
            BooksAPI.search(query).then((data) => {
                if(data.length) {
                    console.log('data2');
                    console.log(data);
                    this.setState({
                        books: data
                    });
                }
                else {
                    this.setState({ books });
                }
            });
        } else {
            this.setState({ books })
        }
    }

    updateQuery = (query) => {
        this.setState({ query: query});
        this.searchForBooks(this.state.query);
    }
    
    // searchForBooks = (query) => {
    //     if(query) {
    //         const match = new RegExp(escapeRegExp(query), 'i');
    //         BooksAPI.search(query).then( data => {
    //             this.setState((state) => {
    //                 return {
    //                     books: books.filter((book) => match.test(book.title))
    //                 }
    //             })
    //         });
    //         //showingBooks = this.books.filter((book) => match.test(book.title))
    //     } else {
    //         this.setState({ books: [] })
    //     }
    //     //showingBooks.sort(sortBy('name'));
    // }
    
    render() {
        let showingBooks;

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                       placeholder="Search by title or author"
                       value={this.state.query} 
                       onChange={(event) => this.updateQuery(event.target.value)}/>
                 {/* {JSON.stringify(this.state)} */}

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