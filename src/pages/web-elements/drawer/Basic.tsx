import React from "react";
import Drawer from "@site/src/components/web-elements/adou-drawer";
const Basic = () => {
  return (
    <Drawer
      title="基础示例"
      trigger={<button className="btn btn-primary">打开抽屉</button>}
    >
      <div>
        <p>这是一个基础的抽屉示例</p>
        <p>点击遮罩层或关闭按钮可以关闭抽屉</p>
      </div>
    </Drawer>
  );
};
export default Basic;
