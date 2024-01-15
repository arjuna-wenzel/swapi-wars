'use client';

import { IVehicle } from '@/interfaces/swapi';
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/table-core';
import GenericTable from '@/components/tables/genericTable';

export default function VehicleTable({ vehicles }: { vehicles: IVehicle[] }) {
  const vehicleColumns = useMemo<ColumnDef<IVehicle>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Model',
        accessorKey: 'model',
      },
      {
        header: 'Manufacturer',
        accessorKey: 'manufacturer',
      },
      {
        header: 'Cost in Credits',
        accessorKey: 'cost_in_credits',
      },
      {
        header: 'Length',
        accessorKey: 'length',
      },
      {
        header: 'Max Atmosphering Speed',
        accessorKey: 'max_atmosphering_speed',
      },
      {
        header: 'Crew',
        accessorKey: 'crew',
      },
      {
        header: 'Passengers',
        accessorKey: 'passengers',
      },
      {
        header: 'Cargo Capacity',
        accessorKey: 'cargo_capacity',
      },
      {
        header: 'Consumables',
        accessorKey: 'consumables',
      },
      {
        header: 'Vehicle Class',
        accessorKey: 'vehicle_class',
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
        header: 'Planet count',
        accessorFn: (originalRow) => originalRow.films.length,
      },
      {
        header: 'Pilot count',
        accessorFn: (originalRow) => originalRow.pilots.length,
      },
    ],
    [],
  );

  return (
    <GenericTable
      columnDef={vehicleColumns as ColumnDef<unknown>[]}
      data={vehicles}
      defaultSort={[
        {
          id: 'name',
          desc: false,
        },
      ]}
    />
  );
}
