'use client';

import { IFilm } from '@/interfaces/swapi';
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/table-core';
import GenericTable from '@/components/tables/genericTable';

export default function FilmTable({ films }: { films: IFilm[] }) {
  const filmColumns = useMemo<ColumnDef<IFilm>[]>(
    () => [
      {
        header: 'Episode ID',
        accessorKey: 'episode_id',
      },
      {
        header: 'Title',
        accessorKey: 'title',
      },
      {
        header: 'Director',
        accessorKey: 'director',
      },
      {
        header: 'Producer',
        accessorKey: 'producer',
      },
      {
        header: 'Release Date',
        accessorKey: 'release_date',
        cell: (info) =>
          new Date(info.getValue() as string).toLocaleDateString(),
      },
      {
        header: 'Opening Crawl',
        accessorKey: 'opening_crawl',
        cell: (info) => (
          <span title={info.getValue() as string}>
            {(info.getValue() as string).substring(0, 50) + '...'}
          </span>
        ),
      },
      {
        header: 'Created',
        accessorFn: (originalRow) =>
          new Date(originalRow.created).toLocaleDateString(),
      },
      {
        header: 'Edited',
        accessorFn: (originalRow) =>
          new Date(originalRow.edited).toLocaleDateString(),
      },
      {
        header: 'Character count',
        accessorFn: (originalRow) => originalRow.characters.length,
      },
      {
        header: 'Planet count',
        accessorFn: (originalRow) => originalRow.planets.length,
      },
      {
        header: 'Specie count',
        accessorFn: (originalRow) => originalRow.species.length,
      },
      {
        header: 'Starship count',
        accessorFn: (originalRow) => originalRow.starships.length,
      },
      {
        header: 'Vehicle count',
        accessorFn: (originalRow) => originalRow.vehicles.length,
      },
    ],
    [],
  );

  return (
    <GenericTable
      columnDef={filmColumns as ColumnDef<unknown>[]}
      data={films}
      defaultSort={[
        {
          id: 'episode_id',
          desc: false,
        },
      ]}
    />
  );
}
