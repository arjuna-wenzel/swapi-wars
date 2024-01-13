import { fetchPlanets } from "@/helper/swapi";
import PlanetTable from "@/app/(withnavbar)/planets/table";

export const revalidate = 3600;

export default async function Page() {
  const planets = await fetchPlanets();
  return <PlanetTable planets={planets} />;
}
