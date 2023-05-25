import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({book, onSubmit}) => {

  const {editBook} = useBooksContext();

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