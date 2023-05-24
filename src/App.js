import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {id: Math.round(Math.random() * 9999), title}
    ];
    setBooks(updatedBooks);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      }
      return book;
    }));
  };

  const deleteBook = (id) => {
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