'use client';

import { useState } from 'react';
import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getSortedRowModel, SortingState } from '@tanstack/table-core';
import { flexRender, useReactTable } from '@tanstack/react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';

export default function GenericTable({
                                       data,
                                       columnDef,
                                       defaultSort,
                                     }: {
  data: unknown[];
  columnDef: ColumnDef<unknown>[];
  defaultSort: SortingState;
}) {
  const [sorting, setSorting] = useState<SortingState>(defaultSort);

  const [columnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns: columnDef,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full relative flex flex-col overflow-x-auto max-w-full">
      <table>
        <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ width: header.getSize() }}
                  className={
                    'relative border-b border-white bg-gray-900 px-2 py-1 text-left text-sm text-white'
                  }
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex h-8 w-full flex-row items-end gap-1">
                      <div
                        {...{
                          className: `flex w-max flex-row gap-1 items-center ${
                            header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : ''
                          }`,
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: (
                            <FontAwesomeIcon
                              icon={faSortUp}
                              className="relative text-xs text-primary"
                            />
                          ),
                          desc: (
                            <FontAwesomeIcon
                              icon={faSortDown}
                              className="relative text-xs text-primary"
                            />
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className={`${
                  index % 2 ? 'bg-gray-900' : 'bg-gray-800'
                } px-2 py-2 text-left text-sm text-white max-h-[3px]`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
