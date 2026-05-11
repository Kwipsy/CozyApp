import { Character } from '@/types/character';
import { API_CONFIG } from '@/constants/config';

export async function fetchCharacters(): Promise<Character[]> {
  const response = await fetch(`${API_CONFIG.BASE_URL}/Characters`);

  if (!response.ok) {
    throw new Error(`API returned status ${response.status}`);
  }

  return response.json();
}