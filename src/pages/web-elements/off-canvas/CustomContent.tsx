import OffCanvas from "@site/src/components/web-elements/adou-off-canvas";
import React from "react";
const CustomContent = () => {
  return (
    <OffCanvas trigger={<button className="btn btn-primary">打开抽屉</button>}>
      <div className="p-3">
        <h5>自定义内容</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">邮箱</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">密码</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            提交
          </button>
        </form>
      </div>
    </OffCanvas>
  );
};
export default CustomContent;
