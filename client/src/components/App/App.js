import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import LibraryService from "../../repository/libraryRepository";
import Header from "../Header/header";
import Book from "../Book/book";
import Category from "../Category/category";
import BookAdd from "../Book/book-add";

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      books: [], categories: []
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className="container">
              <Route path={"/books"} exact render={() =>
                  <Book books={this.state.books}/>}/>
                <Route path={"/categories"} exact render={() =>
                    <Category categories={this.state.categories}/>}/>
                <Route path={"/books/add"} exact render={() =>
                    <BookAdd categories={this.state.categories}
                                onAddProduct={this.addProduct}/>}/>
              <Redirect to={"/books"}/>
            </div>
          </main>
        </Router>
    )
  }

  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
  }

  loadCategories = () =>
  {
      LibraryService.fetchCategories()
          .then((data) =>{
              this.setState({
                  categories: data.data
              })
          })
  }

  loadBooks = () => {
    LibraryService.fetchBooks()
        .then((data) => {
            console.log(data)
          this.setState({
            books: data.data
          })
        });
  }
}

export default App;
