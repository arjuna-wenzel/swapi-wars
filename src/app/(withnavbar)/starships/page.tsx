import { fetchStarships } from "@/helper/swapi";
import StarshipTable from "@/app/(withnavbar)/starships/table";

export const revalidate = 3600;

export default async function Page() {
  const starships = await fetchStarships();
  return <StarshipTable starships={starships} />;
}
