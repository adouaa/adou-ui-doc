import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData.tsx";

interface CheckedIdProps {}

const Checked = ({}: CheckedIdProps) => {
  return (
    <>
      <h5>通过 activeId 选中单行：</h5>
      <div className="checked-wrapper">
        <Table activeId={"team002"} data={data} columns={columns}>
          {columns.map((item: any) => (
            <TableCell key={item.prop} {...item}></TableCell>
          ))}
        </Table>
      </div>
      <hr />
      <h5>通过 defaultChecked 选中某几行：</h5>
      <div className="checked-wrapper">
        <Table
          defaultCheckedList={["team001", "team003", "team004"]}
          data={data}
          columns={columns}
        >
          {columns.map((item: any) => (
            <TableCell key={item.prop} {...item}></TableCell>
          ))}
        </Table>
      </div>
      <h5>通过 checkAll 选中所有行：</h5>
      <div className="checked-wrapper">
        <Table checkAll data={data} columns={columns}>
          {columns.map((item: any) => (
            <TableCell key={item.prop} {...item}></TableCell>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Checked;
