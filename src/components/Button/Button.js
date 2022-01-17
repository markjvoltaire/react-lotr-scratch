import React from 'react';

export default function Button() {
  return (
    <div>
      <select className="selector">
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
