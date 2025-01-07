import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData";

interface ShowIndexProps {}

const ShowIndex = ({}: ShowIndexProps) => {
  return (
    <div className="show-index-wrapper">
      <Table showIndex data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default ShowIndex;
