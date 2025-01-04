import React from "react";
import Drawer from "@site/src/components/web-elements/adou-drawer";
const Placement = () => {
  return (
    <div className="d-flex gap-2">
      <Drawer
        placement="start"
        title="左侧抽屉"
        trigger={<button className="btn btn-primary">从左侧打开</button>}
      >
        <p>从左侧滑出的抽屉</p>
      </Drawer>
      <Drawer
        placement="top"
        height="300px"
        title="顶部抽屉"
        trigger={<button className="btn btn-primary">从顶部打开</button>}
      >
        <p>从顶部滑出的抽屉</p>
      </Drawer>
    </div>
  );
};
export default Placement;
