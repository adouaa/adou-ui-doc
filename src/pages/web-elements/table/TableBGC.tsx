import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData.tsx";

interface TableBGCProps {}

const TableBGC = ({}: TableBGCProps) => {
  return (
    <div className="table-bgc-wrapper">
      <Table tableBGC={"beige"} data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default TableBGC;
