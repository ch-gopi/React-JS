import React, { useState } from "react";

function SearchBar({ setQuery }) {
  const [text, setText] = useState("");

  const handelChange = (e) => {
    setText(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <div>
      <section className="search">
        <form>
          <input
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            type="text"
            name="search"
            value={text}
            onChange={handelChange}
            id="serach"
          />
        </form>
      </section>
    </div>
  );
}

export default SearchBar;
