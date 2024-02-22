import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editBook, removeBook } from "./bookSlice";

const BookList = () => {
  const booksData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editingBook, setEditingBook] = useState(null);

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  const books = booksData.data;
  const isLoading = booksData.loading;

  return (
    <div>
      <h2 className="text-center mb-5">Books List</h2>
      {isLoading ? (
        <div class="d-flex align-items-center">
          <strong role="status">Loading books...</strong>
          <div class="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
      ) : (
        <ul className="list-group">
          {books.map((book) => (
            <li key={book.key} className="list-group-item">
              <div>
                <span>
                  {book.title} by {book.authors[0].name}
                </span>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(book.key)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
