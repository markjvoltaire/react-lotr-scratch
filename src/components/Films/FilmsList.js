import React from 'react';

export default function FilmsList({ films }) {
  console.log(films);
  return (
    <div>
      <div className="films">
        {films.map((film) => (
          <div key={film.id}>
            <p>{film.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
