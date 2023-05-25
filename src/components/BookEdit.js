import {useContext, useState} from "react";
import BooksContext from "../context/books";

const BookEdit = ({book, onSubmit}) => {

  const {editBook} = useContext(BooksContext);

  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook({...book, title});
    onSubmit();
  };

  return (
    <form className={"book-edit"} onSubmit={handleSubmit}>
      <label>Title</label>
      <input className={"input"} value={title} onChange={handleChange} />
      <button className={"button is-primary"}>
        Save
      </button>
    </form>
  );
};

export default BookEdit;