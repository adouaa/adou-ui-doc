import React, { useState } from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./treeData";

interface CollapseProps {}

const Collapse = ({}: CollapseProps) => {
  return (
    <div className="collapse-wrapper">
      <Table data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default Collapse;
