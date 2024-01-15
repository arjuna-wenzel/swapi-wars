import { fetchStarships } from '@/helper/swapi';
import StarshipTable from '@/components/tables/starshipTable';

export const revalidate = 3600;

export default async function Page() {
  const starships = await fetchStarships();
  return <StarshipTable starships={starships} />;
}
