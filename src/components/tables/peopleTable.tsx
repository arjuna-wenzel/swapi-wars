"use client";

import { IPeople } from "@/interfaces/swapi";
import React, { useMemo } from "react";
import { ColumnDef } from "@tanstack/table-core";
import GenericTable from "@/components/tables/genericTable";

export default function PeopleTable({ people }: { people: IPeople[] }) {
  const peopleColumns = useMemo<ColumnDef<IPeople>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Birth Year",
        accessorKey: "birth_year",
      },
      {
        header: "Eye Color",
        accessorKey: "eye_color",
      },
      {
        header: "Gender",
        accessorKey: "gender",
      },
      {
        header: "Hair Color",
        accessorKey: "hair_color",
      },
      {
        header: "Height",
        accessorKey: "height",
      },
      {
        header: "Homeworld",
        accessorKey: "homeworld",
      },
      {
        header: "Mass",
        accessorKey: "mass",
      },
      {
        header: "Skin Color",
        accessorKey: "skin_color",
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
        header: "Species count",
        accessorFn: (originalRow) => originalRow.species.length,
      },
      {
        header: "Starships count",
        accessorFn: (originalRow) => originalRow.starships.length,
      },
      {
        header: "Vehicles count",
        accessorFn: (originalRow) => originalRow.vehicles.length,
      },
    ],
    [],
  );

  return (
    <GenericTable
      columnDef={peopleColumns as ColumnDef<unknown>[]}
      data={people}
      defaultSort={[
        {
          id: "name",
          desc: false,
        },
      ]}
    />
  );
}
