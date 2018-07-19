import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    state = {
        shelf: 'none'
    }
    componentDidMount() {
        if(this.props.book.shelf) {
            this.setState({ shelf: this.props.book.shelf })
        }
    }
    onChangeBookShelf = (e) => {
        this.setState({ shelf: e.target.value })
        this.props.updateBookShelf(this.props.book, e.target.value);
    }
    render() {
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail})`}}>
                    </div>
                    <div className="book-shelf-changer">
                    <select onChange={this.onChangeBookShelf} value={this.state.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors && this.props.book.authors[0]}</div>
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}
export default Book;