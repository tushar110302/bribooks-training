import { useState } from "react";
import "./index.css";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;

    onSearch(username);
  };

  return (
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;
