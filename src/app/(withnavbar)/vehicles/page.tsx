import { fetchVehicles } from "@/helper/swapi";
import VehicleTable from "@/app/(withnavbar)/vehicles/table";

export const revalidate = 3600;

export default async function Page() {
  const vehicles = await fetchVehicles();
  return <VehicleTable vehicles={vehicles} />;
}
