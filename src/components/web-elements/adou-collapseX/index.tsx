import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import Button from "../../adou-button";

interface CollapseProps {
  header?: any;
  children?: any;
  firstShow?: boolean;
}

const Collapse = ({ header, children, firstShow = false }: CollapseProps) => {
  // 如果想做到一进入页面就展示内容，不能一开始就设置为 true
  // 因为那样子会报错：Cannot read properties of null (reading 'scrollWidth')【dom还没加载完？】
  // 正确的做法是：在useEffect里等dom加载完再设置为 true
  const [isOpen, setIsOpen] = useState(false);
  const contentRef: any = useRef(null);

  // 跟界面相关的东西一定要设置成一个 state，这样才会保证 数据变化 -> 页面实时变化
  const [maxWidth, setmaxWidth] = useState<number>(0);
  const [maxHeight, setmaxHeight] = useState<number>(0);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // 正确做法：等dom加载完再设置为 true
  useEffect(() => {
    if (firstShow) {
      setIsOpen(true);
      setmaxWidth(contentRef.current.scrollWidth);
      setmaxHeight(contentRef.current.scrollHeight);
    }
  }, []);

  // 子元素内容发生变化的时候，需要去实时改变范围
  useEffect(() => {
    setmaxWidth(contentRef.current.scrollWidth);
    setmaxHeight(contentRef.current.scrollHeight);
  }, [children]);

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <div className="collapse-header-content" onClick={toggleCollapse}>
          {header || (
            <Button type="primary" size="sm">
              展开
            </Button>
          )}
        </div>
      </div>
      <div
        className="collapse-content mt-2"
        style={{
          maxWidth: isOpen ? `${maxWidth}px` : "0px",
          maxHeight: isOpen ? `${maxHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        ref={contentRef}
      >
        {children || "被折叠的内容"}
      </div>
    </div>
  );
};

export default Collapse;
