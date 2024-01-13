import {fetchPlanets} from "@/helper/swapi";

export const revalidate = 60;

export default async function Page() {
    const planets = await fetchPlanets();
    return <ul>{planets.map(planet => <li key={planet.url}>{planet.name} - {planet.population} - {planet.terrain}</li>)}</ul>
}
