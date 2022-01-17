import React from 'react';

export default function BookList({ books }) {
  return (
    <div>
      <div className="books">
        {books.docs.map((book) => (
          <div key={book._id}>
            <p>{book.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
