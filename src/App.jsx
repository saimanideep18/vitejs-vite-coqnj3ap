import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;