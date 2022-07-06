import React from "react";
import axios from "axios";
import "./table.css";
import {
  useTable,
  useSortBy,
  usePagination
} from "react-table";

import { COLUMNS } from "./APIDataColumns";

export const APIDataTable = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    let url = "https://jsonplaceholder.typicode.com/users/";
    console.log(url);
    const response = await axios.get(url);
    setData(response.data);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: data
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    headerGroups, 
    getTableBodyProps, 
    prepareRow,
    page,

  } = tableInstance;

  return (
    <>
      <table {...getTableProps()} className="table table-hover mb-0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
