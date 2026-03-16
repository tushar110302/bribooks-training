import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import UserCard from "./components/userCard/UserCard";
import Loader from "./components/loader/Loader";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      setError("");
      setUser(null);

      const userResult = await fetch(
        `https://api.github.com/users/${username}`,
      );

      if (!userResult.ok) {
        throw new Error("User not found");
      }
      const userData = await userResult.json();

      const repoResult = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=5`,
      );
      const repoData = await repoResult.json();

      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container text-center py-5">
      <h1 className="mb-4 fw-semibold">GitHub User Search</h1>

      <SearchBar onSearch={fetchUser} />

      {loading && <Loader />}

      {error && <p className="text-danger mt-3">{error}</p>}

      {user && <UserCard user={user} repos={repos} />}
    </div>
  );
}

export default App;
