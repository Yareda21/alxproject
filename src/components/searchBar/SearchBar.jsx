import { useState } from "react";
import { Link } from "react-router-dom";
import "./searchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  };

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          value={query.location}
          onChange={handleChange}
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          value={query.minPrice}
          onChange={handleChange}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          value={query.maxPrice}
          onChange={handleChange}
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <Link
          to={`/list?type=${query.type}&city=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          Search
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
