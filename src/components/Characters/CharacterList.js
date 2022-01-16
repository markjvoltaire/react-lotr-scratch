import React from 'react';

export default function CharacterList({ characters, race, setRace }) {
  return (
    <div>
      <div className="characters">
        {characters.map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
          </div>
        ))}
      </div>

      <select className="selector" value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Elf">Elf</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Ainur">Ainur</option>
        <option value="Orc">Orc</option>
        <option value="Ents, Onodrim">Ents, Onodrim</option>
      </select>
    </div>
  );
}
