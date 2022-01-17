import React from 'react';
import { fetchFilms } from '../../services/films';
import { useState, useEffect } from 'react';
import FilmsList from '../../components/Films/FilmsList';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetchFilms();
      setFilms(response);
      setLoading(false);
    };
    getFilms();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <FilmsList films={films} />
    </div>
  );
}
