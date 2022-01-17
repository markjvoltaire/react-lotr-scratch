import React from 'react';

import { fetchCharacters } from '../../services/characters';
import Characterlist from '../../components/Characters/CharacterList';
import { useState, useEffect } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState(['All']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetchCharacters(race);
      setCharacters(response);
      setLoading(false);
    };
    getCharacters();
  }, [race]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Characterlist characters={characters} setRace={setRace} race={race} />
    </div>
  );
}
