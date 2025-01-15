import React, { useState } from "react";
import Table, { TableCell } from "@site/src/components/web-elements/adou-table";

export const data = [
  {
    id: "dept001",
    name: "技术部",
    type: "部门",
    children: [
      {
        id: "emp001",
        name: "张三",
        type: "员工",
        position: "高级工程师",
        children: [
          {
            id: "task001",
            name: "项目 A 开发任务",
            type: "任务",
            progress: "80%",
          },
          {
            id: "task002",
            name: "技术文档撰写",
            type: "任务",
            progress: "30%",
          },
        ],
      },
      {
        id: "emp002",
        name: "李四",
        type: "员工",
        position: "工程师",
        children: [
          {
            id: "task003",
            name: "项目 B 测试任务",
            type: "任务",
            progress: "50%",
          },
        ],
      },
    ],
  },
  {
    id: "dept002",
    name: "市场部",
    type: "部门",
    children: [
      {
        id: "emp003",
        name: "王五",
        type: "员工",
        position: "市场经理",
        children: [
          {
            id: "campaign001",
            name: "产品推广活动",
            type: "活动",
            status: "进行中",
          },
        ],
      },
    ],
  },
];

export const columns = [
  {
    prop: "id",
    title: "部门ID",
    width: "180px",
    align: "center",
    sortable: true,
  },
  {
    prop: "name",
    title: "部门名称",
    width: "180px",
    align: "end",
  },
  {
    prop: "type",
    title: "类型",
    width: "180px",
  },
  {
    prop: "position",
    title: "职位",
    width: "180px",
  },
];

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
