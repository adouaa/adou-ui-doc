import React, { useRef } from "react";
import OffCanvas from "@site/src/components/web-elements/adou-off-canvas";
const CustomTrigger = () => {
  const offCanvasRef = useRef<any>();
  return (
    <div>
      <OffCanvas
        actRef={offCanvasRef}
        title="自定义触发器"
        trigger={
          <div className="d-flex gap-2">
            <button className="btn btn-primary">触发器1</button>
            <button className="btn btn-secondary">触发器2</button>
          </div>
        }
      >
        <p>使用自定义的触发器打开抽屉</p>
      </OffCanvas>
      <button
        className="btn btn-link"
        onClick={() => offCanvasRef.current.open()}
      >
        外部打开抽屉
      </button>
    </div>
  );
};
export default CustomTrigger;
