import React from 'react';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';
import BookList from '../../components/Books/BookList';

export default function Books() {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response);
      setLoading(false);
    };
    getBooks();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
