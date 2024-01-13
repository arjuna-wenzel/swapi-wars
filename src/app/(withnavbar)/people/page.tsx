import { fetchPeople } from "@/helper/swapi";

export const revalidate = 3600;

export default async function Page() {
  const people = await fetchPeople();
  return (
    <ul>
      {people.map((person) => (
        <li key={person.url}>
          {person.name} - {person.birth_year}
        </li>
      ))}
    </ul>
  );
}
