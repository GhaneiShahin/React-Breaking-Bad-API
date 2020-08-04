import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/UI/Header';
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from './components/UI/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchItems = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    setItems(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={loading} />
    </div>
  );
};

export default App;
