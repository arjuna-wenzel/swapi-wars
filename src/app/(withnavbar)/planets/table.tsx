"use client";

import { IPlanet } from "@/interfaces/swapi";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/table-core";
import Table from "@/components/table";

export default function PlanetTable({ planets }: { planets: IPlanet[] }) {
  const planetColumns = useMemo<ColumnDef<IPlanet>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Climate",
        accessorKey: "climate",
      },
      {
        header: "Diameter",
        accessorKey: "diameter",
      },
      {
        header: "Gravity",
        accessorKey: "gravity",
      },
      {
        header: "Orbital Period",
        accessorKey: "orbital_period",
      },
      {
        header: "Population",
        accessorKey: "population",
      },
      {
        header: "Rotation Period",
        accessorKey: "rotation_period",
      },
      {
        header: "Surface Water",
        accessorKey: "surface_water",
      },
      {
        header: "Terrain",
        accessorKey: "terrain",
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
        header: "Resident count",
        accessorFn: (originalRow) => originalRow.residents.length,
      },
    ],
    [],
  );

  return (
    <Table
      columnDef={planetColumns as ColumnDef<unknown>[]}
      data={planets}
      defaultSort={[
        {
          id: "name",
          desc: false,
        },
      ]}
    />
  );
}
