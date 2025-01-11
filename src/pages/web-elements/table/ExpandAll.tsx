import React, { useRef, useState } from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { columns, data } from "./treeData";
import Button from "@site/src/components/adou-button";

interface ExpandAllProps {}

const ExpandAll = ({}: ExpandAllProps) => {
  const tableRef = useRef<any>(null);

  return (
    <div className="expan-all-wrapper">
      <Table
        tableRef={tableRef}
        headSticky
        expandAll
        data={data}
        columns={columns}
      >
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default ExpandAll;
