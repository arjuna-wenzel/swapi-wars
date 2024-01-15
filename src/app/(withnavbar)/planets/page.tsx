import { fetchPlanets } from '@/services/swapi';
import PlanetTable from '@/components/tables/planetTable';

export const revalidate = 3600;

export default async function Page() {
  const planets = await fetchPlanets();
  return <PlanetTable planets={planets} />;
}
