import React, { useState } from 'react';
import Button from '../../components/Button/Button';

export default function Buttons() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <Button query={query} setQuery={setQuery} />
    </div>
  );
}
