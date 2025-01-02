import React from "react";
import OffCanvas from "@site/src/components/web-elements/adou-off-canvas";
const Placement = () => {
  return (
    <div className="d-flex gap-2">
      <OffCanvas
        placement="start"
        title="左侧抽屉"
        trigger={<button className="btn btn-primary">从左侧打开</button>}
      >
        <p>从左侧滑出的抽屉</p>
      </OffCanvas>
      <OffCanvas
        placement="top"
        height="300px"
        title="顶部抽屉"
        trigger={<button className="btn btn-primary">从顶部打开</button>}
      >
        <p>从顶部滑出的抽屉</p>
      </OffCanvas>
    </div>
  );
};
export default Placement;
