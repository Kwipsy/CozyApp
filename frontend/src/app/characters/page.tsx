import { fetchCharacters } from '@/lib/api';
import { CharacterList } from '@/components/CharacterList';
import { ErrorMessage } from '@/components/ErrorMessage';

export default async function CharactersPage() {
  try {
    const characters = await fetchCharacters();

    return (
      <main className="container mx-auto px-4 py-8">
        <CharacterList characters={characters} />
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    return (
      <main className="container mx-auto px-4 py-8">
        <ErrorMessage message="Error loading characters. Make sure your .NET backend is running on localhost:5157" />
      </main>
    );
  }
}
