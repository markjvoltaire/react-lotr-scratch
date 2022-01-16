import React from 'react';

import { fetchCharacters } from '../../services/characters';
import Characterlist from '../../components/Characters/CharacterList';
import { useState, useEffect } from 'react';
export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState(['All']);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetchCharacters('All');
      setCharacters(response);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <Characterlist characters={characters} race={race} setRace={setRace} />
    </div>
  );
}
