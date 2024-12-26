import Button from "@site/src/components/adou-button";
import Popover from "@site/src/components/web-elements/adou-popover";
import React, { useState } from "react";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="basic-wrapper">
      <Popover
        title={"Title"}
        content={<span className="text-primary small">浮层内容</span>}
      >
        <Button onClick={() => setShow(true)}>click me</Button>
      </Popover>
    </div>
  );
};

export default Basic;
