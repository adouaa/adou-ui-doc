import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

interface TableCellProps {
  parentId?: any;
  tooltip?: boolean;
  sortable?: boolean;
  collapse?: boolean;
  isParent?: boolean;
  maxWidth?: any;
  children?: any;
  prop?: string;
  label?: string;
  rowIndex?: number;
  colIndex?: number;
  value?: string;
  rowData?: any;
  eidtable?: boolean;
  render?: any;
  width?: string;
  align?: any;
  verticalAlign?: "middle" | "top" | "bottom" | "baseline";
  onChange?: (rowIndex: number, colIndex: number, value: string) => void;
  onEditCancel?: () => void;
  onEditOK?: (value: string) => void;
  onExpand?: () => void;
}

const TableCell = (props: TableCellProps) => {
  const {
    parentId,
    tooltip,
    sortable,
    collapse,
    isParent,
    maxWidth,
    render,
    rowData,
    prop,
    label,
    rowIndex,
    colIndex,
    value,
    eidtable,
    align = "center",
    width,
    onChange,
    onEditCancel,
    onEditOK,
    onExpand,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value || ""); // 最终展示的值
  const wrapperRef = useRef<any>(null);
  const handleDoubleClick = () => {
    eidtable && setIsEditing(true);
  };

  const handleBlur = (e: any) => {
    const value = e.target.value;
    setIsEditing(false);
    if (true) {
      setEditedValue(value);
      onEditOK && onEditOK(value);
    }
  };
  const handleChange = (e: any) => {};

  const handleExpandIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onExpand && onExpand();
  };

  // 判断每一列的 对齐方式
  const judgeTdAlign = () => {
    switch (align) {
      case "start":
        return "justify-content-start";

      case "end":
        return "justify-content-end";
      default:
        return "justify-content-center";
    }
  };

  // 这边必须要写一个监听传递过来的value的钩子函数，因为cell展示的值是 editValue
  // 当传递过来的value发生变化时，将它重新赋值给cell要展示的值
  // 如果cell要展示的值是 value，就可以不用写
  useEffect(() => {
    setEditedValue(value!);
  }, [value]);

  return (
    <div
      className={`table-cell d-flex ${judgeTdAlign()}`}
      style={{ width: "100%" }}
    >
      {render ? (
        render(editedValue, rowData, rowIndex, prop, colIndex)
      ) : (
        <div
          className="table-cell-wrapper"
          style={{ display: "inline-block", width: "100%" }}
          onDoubleClick={handleDoubleClick}
          ref={wrapperRef}
        >
          {isEditing ? (
            <div
              style={{
                width: wrapperRef.current
                  ? `${wrapperRef.current.clientWidth}px`
                  : "100%",
                boxSizing: "border-box",
              }}
            ></div>
          ) : (
            <div className="table-cell-content">
              {/* 如果该列没有 toolTip 的话，就需要到这边来控制对齐方式 */}
              <div
                className={`value d-flex align-items-center ${judgeTdAlign()}`}
              >
                {isParent ? (
                  <i
                    onClick={handleExpandIconClick}
                    className={`fa-solid fa-chevron-right me-2 ${
                      collapse ? "table-cell-folder-rotate-down" : ""
                    } collapse-icon`}
                  ></i>
                ) : parentId && colIndex === 0 ? (
                  <span className="ps-3"></span>
                ) : null}
                <div style={{ maxWidth }} className="ellipsis-1 ">
                  {editedValue}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TableCell;
