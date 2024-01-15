import { fetchVehicles } from "@/helper/swapi";
import VehicleTable from "@/components/tables/vehicleTable";

export const revalidate = 3600;

export default async function Page() {
  const vehicles = await fetchVehicles();
  return <VehicleTable vehicles={vehicles} />;
}
