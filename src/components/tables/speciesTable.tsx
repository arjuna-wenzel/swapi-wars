"use client";

import { ISpecie } from "@/interfaces/swapi";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/table-core";
import GenericTable from "@/components/tables/genericTable";

export default function SpecieTable({ species }: { species: ISpecie[] }) {
  const specieColumns = useMemo<ColumnDef<ISpecie>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Classification",
        accessorKey: "classification",
      },
      {
        header: "Designation",
        accessorKey: "designation",
      },
      {
        header: "Average Height",
        accessorKey: "average_height",
      },
      {
        header: "Average Lifespan",
        accessorKey: "average_lifespan",
      },
      {
        header: "Eye Colors",
        accessorKey: "eye_colors",
      },
      {
        header: "Hair Colors",
        accessorKey: "hair_colors",
      },
      {
        header: "Skin Colors",
        accessorKey: "skin_colors",
      },
      {
        header: "Language",
        accessorKey: "language",
      },
      {
        header: "Homeworld",
        accessorKey: "homeworld",
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
        header: "People count",
        accessorFn: (originalRow) => originalRow.people.length,
      },
    ],
    [],
  );

  return (
    <GenericTable
      columnDef={specieColumns as ColumnDef<unknown>[]}
      data={species}
      defaultSort={[
        {
          id: "name",
          desc: false,
        },
      ]}
    />
  );
}
