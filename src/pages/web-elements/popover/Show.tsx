import Button from "@site/src/components/adou-button";
import Popover from "@site/src/components/web-elements/adou-popover";
import React, { useState } from "react";

interface ShowProps {}

const Show = ({}: ShowProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    if (count >= 2) {
      setShow(true);
    }
    setCount(count + 1);
  };

  return (
    <div className="show-wrapper">
      <Popover
        show={show}
        title={"Title"}
        content={
          <span className="text-primary small" onClick={() => setShow(false)}>
            关闭
          </span>
        }
      >
        <Button onClick={handleClick}>Click me</Button>
      </Popover>
    </div>
  );
};

export default Show;
