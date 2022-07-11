import React from "react";
import axios from "axios";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination
} from "react-table";

// import { COLUMNS } from "./Columns";

import { COLUMNS } from "./APIDataColumns";
import { GlobalFilter } from "./GlobalFilter";

export const APIFuncionariosTable = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    let url = "https://jsonplaceholder.typicode.com/users/";
    console.log(url);
    const response = await axios.get(url);
    setData(response.data);
  };
  React.useEffect(() => {
    getData();
  }, []); // don't forget this empty bracket it indicates the function will only run once when the component will load initially

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    headerGroups, 
    getTableBodyProps, 
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
    page,
  } = tableInstance;

  const { globalFilter} = state;

  return (
    <>
      <div className="table-funcionarios">

      <div className="filtro-funcionarios">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      </div>

      <table {...getTableProps()} className="table table-hover mb-0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterGroupProps}>
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      </div>
    </>
  );
};
