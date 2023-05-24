import {useEffect, useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {title});
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBook = async (updatedBook) => {
    const response = await axios.put(`http://localhost:3001/books/${updatedBook.id}`, updatedBook);
    setBooks(books.map(book => {
      if (book.id === updatedBook.id) {
        return response.data;
      }
      return book;
    }));
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className={"app"}>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook}/>
    </div>
  );
};

export default App;