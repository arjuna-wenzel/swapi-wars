import { fetchSpecies } from "@/helper/swapi";

export const revalidate = 3600;

export default async function Page() {
  const species = await fetchSpecies();
  return (
    <ul>
      {species.map((specie) => (
        <li key={specie.url}>
          {specie.name} - {specie.homeworld} - {specie.language}
        </li>
      ))}
    </ul>
  );
}
