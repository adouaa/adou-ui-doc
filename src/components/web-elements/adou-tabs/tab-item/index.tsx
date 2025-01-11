import React from "react";

interface TabItemProps {
  exsternalClsaaName?: string;
  prefixIcon?: string;
  headerIcon?: any;
  extraContent?: any;
  label?: string;
  url?: string;
  children?: any;
  active?: boolean;
  contentPadding?: string;
  clearOnChange?: boolean;
}

const TabItem = (props: TabItemProps) => {
  const {
    exsternalClsaaName,
    prefixIcon,
    headerIcon,
    extraContent,
    label,
    url,
    children,
    active,
    contentPadding = "0px",
    clearOnChange,
  } = props;
  return (
    <div
      className="tab-item-wrapper"
      // 当 active为 true 时，设置高度为 100%，否则为 0，避免父组件设置了 contentHeight 时，影响到 隐藏的 tabItem 的高度
      style={{ height: active ? "100%" : "0" }}
    >
      {/* clearOnChange为true，则进行组件的销毁和重建 */}
      {clearOnChange ? (
        active && (
          <div
            className="tab-item-content"
            style={{
              padding: contentPadding || "0px 10px",
              height: "100%",
            }}
          >
            {children}
          </div>
        )
      ) : (
        // clearOnChange为true，不进行组件的销毁和重建，直接使用 d-none来进行切换
        <div
          className={`${active ? "" : "d-none"}`}
          style={{
            padding: contentPadding || "0px 10px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default TabItem;
