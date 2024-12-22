import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Hint from "@site/src/components/adou-hint";
import Button from "@site/src/components/adou-button";

interface BasicProps {}

const Custom = ({}: BasicProps) => {
  const hintContent = [
    {
      title: "提示标题1",
      content: [
        {
          value: "这是普通文本。",
        },
        {
          value: (
            <span>
              这是自定义文本：
              <Button
                onClick={() => window.alert("这是一个提示")}
                type="primary"
                size="sm"
              >
                提示
              </Button>
            </span>
          ),
        },
      ],
    },
    {
      title: "提示标题2",
      content: [{ value: "另一个普通文本。" }],
    },
  ];

  return (
    <div className="custom-wrapper">
      <Hint hintContent={hintContent} bgc="#bbf146" color="black"></Hint>
    </div>
  );
};

export default Custom;
