import { useEffect, useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import UserCard from "./components/userCard/UserCard";
import Loader from "./components/loader/Loader";
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (dark) => {
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    applyTheme(darkMode);

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [darkMode]);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
      <div className="d-flex justify-content-end align-items-center mb-4">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <IoMoonSharp className="fa-moon" />
          <IoSunny className="fa-sun" />
          <span className="ball"></span>
        </label>
      </div>
      <h1 className="mb-4 fw-semibold">GitHub User Search</h1>

      <SearchBar onSearch={fetchUser} />

      {loading && <Loader />}

      {error && <p className="text-danger mt-3">{error}</p>}

      {user && <UserCard user={user} repos={repos} />}
    </div>
  );
}

export default App;
