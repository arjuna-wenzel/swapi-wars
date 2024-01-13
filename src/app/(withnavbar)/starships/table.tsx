"use client";

import { IStarship } from "@/interfaces/swapi";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/table-core";
import Table from "@/components/table";

export default function StarshipTable({
  starships,
}: {
  starships: IStarship[];
}) {
  const starshipColumns = useMemo<ColumnDef<IStarship>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Model",
        accessorKey: "model",
      },
      {
        header: "Manufacturer",
        accessorKey: "manufacturer",
      },
      {
        header: "Cost in Credits",
        accessorKey: "cost_in_credits",
      },
      {
        header: "Length",
        accessorKey: "length",
      },
      {
        header: "Max Atmosphering Speed",
        accessorKey: "max_atmosphering_speed",
      },
      {
        header: "Crew",
        accessorKey: "crew",
      },
      {
        header: "Passengers",
        accessorKey: "passengers",
      },
      {
        header: "Cargo Capacity",
        accessorKey: "cargo_capacity",
      },
      {
        header: "Consumables",
        accessorKey: "consumables",
      },
      {
        header: "Hyperdrive Rating",
        accessorKey: "hyperdrive_rating",
      },
      {
        header: "MGLT",
        accessorKey: "MGLT",
      },
      {
        header: "Starship Class",
        accessorKey: "starship_class",
      },
      {
        header: "Created",
        accessorFn: (originalRow) =>
          new Date(originalRow.created).toLocaleDateString(),
      },
      {
        header: "Edited",
        accessorFn: (originalRow) =>
          new Date(originalRow.edited).toLocaleDateString(),
      },
      {
        header: "Film count",
        accessorFn: (originalRow) => originalRow.films.length,
      },
      {
        header: "Pilot count",
        accessorFn: (originalRow) => originalRow.pilots.length,
      },
    ],
    [],
  );

  return (
    <Table
      columnDef={starshipColumns as ColumnDef<unknown>[]}
      data={starships}
      defaultSort={[
        {
          id: "name",
          desc: false,
        },
      ]}
    />
  );
}
