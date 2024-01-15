import { fetchPeople, fetchPlanets } from '@/services/swapi';
import PeopleTable from '@/components/tables/peopleTable';
import { IPeople } from '@/interfaces/swapi';

export const revalidate = 3600;

export default async function Page() {
    //fetching both people and persons, so we can show the homeworld name in the table instead of the entity url
    const people = await fetchPeople();
    const planets = await fetchPlanets();

    //mapping to an object for easier iterative access, could also use find in every map iteration but costs performance
    const mappedPlanets: { [url: string]: string } = {};
    planets.forEach((planet) => (mappedPlanets[planet.url] = planet.name));

    //mapping homeworld name to each person with entity url as a fallback
    const mappedPeople: IPeople[] = people.map((person) => ({
        ...person,
        homeworld: mappedPlanets[person.homeworld] ?? person.homeworld,
    }));

    return <PeopleTable people={mappedPeople} />;
}
