import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data, columns } from "./basicData";

interface AlignProps {}

const Align = ({}: AlignProps) => {
  const columns1 = [
    { label: "团队 ID", prop: "id", width: "120px" },
    {
      label: "团队名称",
      prop: "teamName",
      width: "150px",
      align: "start",
    },
    { label: "负责人", prop: "leader", width: "120px" },
    {
      label: "联系邮箱",
      prop: "contactEmail",
      width: "120px",
    },
    { label: "团队人数", prop: "memberCount", width: "120px", align: "center" },
    {
      label: "成立年限",
      prop: "yearsSinceEstablishment",
      width: "120px",
    },
  ];

  return (
    <div className="align-wrapper">
      <h5>全局居左</h5>
      <Table align="start" data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
      <hr />
      <h5>全局居右边，第二列居左，第五列居中</h5>
      <Table align="end" data={data} columns={columns}>
        {columns1.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default Align;
