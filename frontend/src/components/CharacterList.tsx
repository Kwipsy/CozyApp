import { Character } from '@/types/character';

interface CharacterListProps {
  characters: Character[];
}

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Characters</h1>
      <ul className="space-y-2">
        {characters.map((character) => (
          <li
            key={character.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
}