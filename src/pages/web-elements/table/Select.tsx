import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData";

interface SelectProps {}

const Select = ({}: SelectProps) => {
  return (
    <div className="select-wrapper">
      <h5>默认单选：</h5>
      <Table clickChecked collection data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
      <h6>通过 `multiple` 属性开启多选</h6>
      <Table clickChecked collection multiple data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default Select;
