import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({ title: "", author: "", description: "", cover: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input type="url" name="cover" placeholder="Cover Image URL" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default AddBook;