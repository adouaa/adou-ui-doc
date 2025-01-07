import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData";

interface ClickedCheckedProps {}

const ClickedChecked = ({}: ClickedCheckedProps) => {
  return (
    <div className="clicked-checked-wrapper">
      <Table
        onRowClick={(row: any) => {
          alert(`表格的数据：${JSON.stringify(row)}`);
        }}
        id="id"
        clickChecked
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

export default ClickedChecked;
