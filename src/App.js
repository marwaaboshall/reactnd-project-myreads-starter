import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      console.log('Component did mount');
      this.setState({
        books: data
      });
      console.log(this.state.books);
    });
  }

  updateBookShelf = (book, shelf) => {
    this.setState((state) => {
      if(shelf === 'none') {
        return {
          books: state.books.filter(b => b.id !== book.id)
        }
      }
      return {
        books: state.books.map(b => {
          if(b.id === book.id) {
            b.shelf = shelf;
          }
          return b;
        })
      }
    })
    BooksAPI.update(book, shelf);
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search books={this.state.books} changeBookShelf={this.updateBookShelf}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks onUpdateShelf={this.updateBookShelf} books={this.state.books}/>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
