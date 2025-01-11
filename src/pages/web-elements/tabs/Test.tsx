import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Button from "@site/src/components/adou-button";

interface TestProps {}

const Test = ({}: TestProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="test-wrapper">
      <p>内容1</p>
      <h3>计数：{count}</h3>
      <Button onClick={() => setCount((prev: number) => prev + 1)}>+1</Button>
    </div>
  );
};

export default Test;
