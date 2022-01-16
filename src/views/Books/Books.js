import React from 'react';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';
import BookList from '../../components/Books/BookList';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response);
    };
    getBooks();
  }, []);

  return (
    <div>

    </div>
  );
}
