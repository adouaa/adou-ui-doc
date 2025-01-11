import React from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";
import { data } from "./basicData";

interface ShowTipProps {}

const ShowTip = ({}: ShowTipProps) => {
  const columns = [
    { title: "团队 ID", prop: "id", width: "120px" },
    {
      title: "团队名称",
      prop: "teamName",
      width: "150px",
    },
    { title: "负责人", prop: "leader", width: "120px" },
    {
      title: "联系邮箱",
      prop: "contactEmail",
      width: "150px",
      maxWidth: "120px",
      showTip: true,
    },
    { title: "团队人数", prop: "memberCount", width: "120px" },
    {
      title: "成立年限",
      prop: "yearsSinceEstablishment",
      width: "120px",
    },
  ];

  return (
    <div className="show-tip-wrapper">
      <Table data={data} columns={columns}>
        {columns.map((item: any) => (
          <TableCell key={item.prop} {...item}></TableCell>
        ))}
      </Table>
    </div>
  );
};

export default ShowTip;
