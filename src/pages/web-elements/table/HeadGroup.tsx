import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./headGroupData";

interface HeadGroupProps {}

const HeadGroup = ({}: HeadGroupProps) => {
  return (
    <div className="head-group-wrapper">
      <Table data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default HeadGroup;
