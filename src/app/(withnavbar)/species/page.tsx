import { fetchSpecies } from "@/helper/swapi";
import SpecieTable from "@/app/(withnavbar)/species/table";

export const revalidate = 3600;

export default async function Page() {
  const species = await fetchSpecies();
  return <SpecieTable species={species} />;
}
