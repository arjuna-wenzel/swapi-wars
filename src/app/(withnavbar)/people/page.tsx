import { fetchPeople } from "@/helper/swapi";
import PeopleTable from "@/app/(withnavbar)/people/table";

export const revalidate = 3600;

export default async function Page() {
  const people = await fetchPeople();
  return <PeopleTable people={people} />;
}
