import BookList from "./BookList";
import BookLoader from "./BookLoader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Online-библиотека Open Library</h1>
      <BookLoader />
      <BookList />
    </div>
  );
}

export default App;
