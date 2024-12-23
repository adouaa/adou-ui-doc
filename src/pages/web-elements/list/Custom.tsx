import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";

interface CustomProps {}

const Custom = ({}: CustomProps) => {
  const data = [
    {
      id: "1",
      name: "根节点1",
      isExpanded: false,
      prefixTag: "fa fa-home",
      children: [
        {
          id: "1-1",
          isExpanded: false,
          name: (
            <>
              <h3>
                测试<i className="fa fa-plus ms-3 small text-success"></i>
              </h3>
            </>
          ),
          children: [
            {
              id: "1-1-1",
              name: "孙节点1-1-1",
              isExpanded: false,
              prefixTag: "fa fa-trash text-danger",
              children: [
                {
                  id: "1-1-1-1",
                  name: "曾孙节点1-1-1-1",
                  isExpanded: false,
                  children: [],
                },
                {
                  id: "11-11-1-1",
                  name: "曾孙节点11-11-1-1",
                  isExpanded: false,
                  children: [],
                },
                {
                  id: "121-121-1-1",
                  name: "曾孙节点121-1-1-1",
                  isExpanded: false,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: "1-2",
          name: "子节点1-2",
          isExpanded: false,
          children: [
            {
              id: "1-2-1",
              name: "孙节点1-2-1",
              isExpanded: false,
              children: [],
            },
            {
              id: "1-2-2",
              name: "孙节点1-2-2",
              isExpanded: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "3-1-1-2",
      name: <em>曾孙节点3-1-1-2</em>,
      isExpanded: false,
      children: [
        {
          id: "13-1-1-2",
          name: "曾孙节点13-1-1-2",
          isExpanded: false,
          children: [
            {
              id: "113-1-1-2",
              name: "曾孙节点113-1-1-2",
              isExpanded: false,
              prefixTag: "fa fa-trash text-danger",
              children: [
                {
                  id: "1113-1-1-2",
                  name: "曾孙节点1113-1-1-2",
                  isExpanded: false,
                },
              ],
            },
            {
              id: "213-1-1-2",
              name: "曾孙节点213-1-1-2",
              isExpanded: false,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "根节点2",
      isExpanded: false,
      children: [
        {
          id: "2-1-1-2",
          name: "曾孙节点2-1-1-2",
          isExpanded: false,
          children: [
            {
              id: "2-2-1-2",
              name: "曾孙节点2-2-1-2",
              isExpanded: false,
              children: [
                {
                  id: "2-3-1-2",
                  name: "曾孙节点2-3-1-2",
                  isExpanded: false,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: "12-2-1-2",
          name: "曾孙节点2-2-1-2",
          isExpanded: false,
          children: [
            {
              id: "2-3-1-5",
              name: "曾孙节点2-3-1-5",
              isExpanded: false,
              children: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="custom-wrapper p-2">
      <List isTree data={data}></List>
    </div>
  );
};

export default Custom;
