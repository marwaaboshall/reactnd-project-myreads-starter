import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: []
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
        <Route path="/search" render={() => (
          <Search currentBooks={this.state.books} changeBookShelf={this.updateBookShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks onUpdateShelf={this.updateBookShelf} books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
