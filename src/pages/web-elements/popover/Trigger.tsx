import Button from "@site/src/components/adou-button";
import Popover from "@site/src/components/web-elements/adou-popover";
import React, { useState } from "react";

interface TriggerProps {}

const Trigger = ({}: TriggerProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="trigger-wrapper">
      <Popover
        trigger="hover"
        title={"Title"}
        content={<span className="text-primary small">浮层内容</span>}
      >
        <Button onClick={() => setShow(true)}>Hover me</Button>
      </Popover>
    </div>
  );
};

export default Trigger;
