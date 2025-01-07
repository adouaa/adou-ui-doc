import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  return (
    <div className="basic-wrapper">
      <Table data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default Basic;
