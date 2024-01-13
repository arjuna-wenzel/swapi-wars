import { fetchVehicles } from "@/helper/swapi";

export const revalidate = 3600;

export default async function Page() {
  const vehicles = await fetchVehicles();
  return (
    <ul>
      {vehicles.map((vehicle) => (
        <li key={vehicle.url}>
          {vehicle.name} - {vehicle.crew}
        </li>
      ))}
    </ul>
  );
}
