# MyReads Project

This project is the final assessment project for Udacity's React Fundamentals course. The goal of this project is to build myreads react app that has a list of books. The main page is divided into three shelves, each shelf has it's own books. You can move a book from one shelf to another using "change shelf" controller and you can add more books through the search page. The development of the app contains 4 components (ListBooks, Shelf, Book and Search).



## Start

To be able to run the app, open the directory then run:
* npm start

To make sure that you are not missing any dependencies, make sure to run:
* npm install

## Development

A list of the packages that are used in the development:
*PropTypes, to install it run: npm install --save prop-types
*react-router-dom, to install it run: npm install --save react-router-dom

## How to use the app

* Clone: git clone https://github.com/marwaaboshall/reactnd-project-myreads-starter.git
* Run: npm start
* In the main page, you can move a book from one shelf to another using the change shelf controller that
is attached to each book.
* Search: you can search for specific books in the search page by clicking on the search button in the 
down right corner of the screen. you can also add new books to your page using the controller that is attached to each book in the search page.
* you can remove a book from your shelf by choosing none in the change book controller.


## Backend Server

The backend server that is provided in the project is the provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.