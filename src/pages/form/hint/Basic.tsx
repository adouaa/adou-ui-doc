import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Hint from "@site/src/components/adou-hint";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  const hintContent = [
    {
      title: "提示标题1",
      content: [
        {
          value: "这是普通文本。",
        },
        {
          value: "这是高亮文本。",
          textColor: "#ff0000",
          textBgcolor: "#ffff00",
        },
      ],
    },
    {
      title: "提示标题2",
      content: [{ value: "另一个普通文本。" }],
    },
  ];

  return (
    <div className="basic-wrapper">
      <Hint hintContent={hintContent} bgc="#e0f7fa" color="#006064"></Hint>
    </div>
  );
};

export default Basic;
