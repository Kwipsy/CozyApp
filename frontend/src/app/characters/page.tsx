'use client';

import { useEffect, useState } from 'react';
import { Character } from '@/types/character';
import { fetchCharacters } from '@/lib/api';
import { CharacterList } from '@/components/CharacterList';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Loading } from '@/components/Loading';

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load characters');
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <ErrorMessage message={error} />
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <CharacterList characters={characters!} />
    </main>
  );
}
