import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

export const Provider = ({children}) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
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

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBook,
    deleteBook
  };

  return <BooksContext.Provider value={valueToShare}>
    {children}
  </BooksContext.Provider>

};
export default BooksContext;