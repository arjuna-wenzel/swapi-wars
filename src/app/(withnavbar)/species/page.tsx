import { fetchPlanets, fetchSpecies } from "@/helper/swapi";
import SpecieTable from "@/components/tables/speciesTable";
import { ISpecie } from "@/interfaces/swapi";

export const revalidate = 3600;

export default async function Page() {
  //fetching both species and persons, so we can show the homeworld name in the table instead of the entity url
  const species = await fetchSpecies();
  const planets = await fetchPlanets();

  //mapping to an object for easier iterative access, could also use find in every map iteration but costs performance
  const mappedPlanets: { [url: string]: string } = {};
  planets.forEach((planet) => (mappedPlanets[planet.url] = planet.name));

  //mapping homeworld name to each specie with entity url as a fallback
  const mappedSpecies: ISpecie[] = species.map((specie) => ({
    ...specie,
    homeworld: mappedPlanets[specie.homeworld] ?? specie.homeworld,
  }));

  return <SpecieTable species={mappedSpecies} />;
}
