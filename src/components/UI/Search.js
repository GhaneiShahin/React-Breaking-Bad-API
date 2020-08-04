import React, { useState } from 'react';

const Search = ({getQuery}) => {
  const [search, setSearch] = useState('');

  const onChangeHandler = (q) => {
    setSearch(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters..."
          className="form-control"
          autoFocus
          value={search}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
