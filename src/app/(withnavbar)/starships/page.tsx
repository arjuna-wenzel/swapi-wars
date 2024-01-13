import {fetchStarships} from "@/helper/swapi";

export const revalidate = 60;

export default async function Page() {
    const starships = await fetchStarships();
    return <ul>{starships.map(starship => <li key={starship.url}>{starship.name} - {starship.crew}</li>)}</ul>
}
