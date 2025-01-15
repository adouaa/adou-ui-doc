import Button from "@site/src/components/adou-button";
import Tooltip from "@site/src/components/web-elements/adou-tooltip";
import React, { useState } from "react";

interface TriggerProps {}

const Trigger = ({}: TriggerProps) => {
  const [mustShow, setMustShow] = useState(false);

  return (
    <div className="trigger-wrapper d-flex align-items-center">
      <Tooltip text="强制显示的提示" mustShow={mustShow}>
        <span>点击按钮强制显示提示</span>
      </Tooltip>
      <Button externalClassName="ms-2" onClick={() => setMustShow(!mustShow)}>
        点击
      </Button>
    </div>
  );
};

export default Trigger;
