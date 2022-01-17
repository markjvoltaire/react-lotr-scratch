import React from 'react';

export default function CharacterList({ characters, race, setRace }) {
  return (
    <div>
      <div>
        <select
          value={race}
          onInput={(e) => {
            setRace(e.target.value);
          }}
        >
          <option value="All">Select Type</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Elf">Elf</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Ainur">Ainur</option>
          <option value="Orc">Orc</option>
          <option value="Ents, Onodrim">Ents, Onodrim</option>
        </select>
      </div>
      <div className="characters">
        {characters.map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
            <p>{character.race}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
