import OffCanvas from "@site/src/components/web-elements/adou-off-canvas";
import React from "react";
const NoClickOutside = () => {
  return (
    <OffCanvas
      clickOutside={false}
      maskClosable={false}
      trigger={<button className="btn btn-primary">打开抽屉</button>}
    >
      <div className="p-3">
        <h5>禁用点击外部关闭</h5>
        <p>只能通过关闭按钮关闭抽屉</p>
      </div>
    </OffCanvas>
  );
};
export default NoClickOutside;
