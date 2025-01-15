import React, {
  Fragment,
  useEffect,
  useId,
  useImperativeHandle,
  useState,
  useCallback,
} from "react";
import TableCell from "./TableCell";
import "./index.scss";
import Tooltip from "../adou-tooltip";
import isEmptyO from "@site/src/common/utils/isEmptyO";

export { TableCell };

export const recursiveGenerateTableHeaderRows = (
  columns: any[],
  newRows: any[] = []
) => {
  columns.forEach((column) => {
    if (column.children) {
      recursiveGenerateTableHeaderRows(column.children, newRows);
    } else {
      newRows.push(column);
    }
  });
  return newRows;
};

interface TableProps {
  pageSizeOptions?: number[];
  pagination?: boolean; // 是否显示分页
  pageSize?: number; // 每页显示条数
  currentPage?: number; // 当前页码
  showTotal?: boolean; // 是否显示总条数
  compact?: boolean;
  showTip?: boolean;
  checkAll?: boolean;
  tdPadding?: string;
  clickChecked?: boolean;
  showHeader?: boolean;
  defaultCheckedList?: any;
  headerFontWeight?: "normal" | "bold";
  tableWidth?: any; // 控制 table的宽度，太宽的话 可以形成滚动条
  tableBGC?: any;
  tableRef?: any;
  // activeId有值，才会在列表刷新的时候，高亮显示刷新列表前选中的行。否则一刷新就会清空选中行
  activeId?: number | string;
  maxWidth?: any;
  showIndex?: boolean;
  multiple?: boolean;
  id?: string;
  trPointer?: boolean;
  align?: "center" | "start" | "end" | "justify";
  collection?: boolean;
  collapse?: boolean;
  expandAll?: boolean;
  eidtable?: boolean;
  size?: "lg" | "sm";
  data: any;
  columns?: any;
  propsData?: any;
  tableHover?: boolean;
  tableStriped?: boolean;
  tableBorderd?: boolean;
  tableBorderless?: boolean;
  headColor?: "light" | "dark";
  captionContent?: any;
  captionPosition?: "top" | "bottom";
  tableResponsive?: "sm" | "md" | "lg" | "xl" | "xxl";
  children?: any;
  headSticky?: boolean;
  headTextColor?: string;
  headBGC?: any;
  divider?: boolean;
  maxHeight?: string;
  minHeight?: string;
  onRowDoubleClick?: (row: any) => void;
  onRowClick?: (row: any) => void;
  onPageChange?: (page: number) => void; // 页码改变的回调
  onPageSizeChange?: (size: number) => void; // 每页条数改变的回调
}

const Table = (props: TableProps) => {
  const {
    pageSizeOptions = [5, 10, 15, 20],
    pagination = false,
    pageSize = 10,
    currentPage = 1,
    showTotal = false,
    compact,
    showTip,
    checkAll,
    tdPadding = "px-2 py-3",
    clickChecked,
    showHeader = true,
    defaultCheckedList,
    headerFontWeight = "normal",
    tableWidth, // 控制 table的宽度，太宽的话 可以形成滚动条
    tableBGC,
    tableRef,
    activeId,
    maxWidth,
    showIndex = false,
    multiple = false,
    id = "id",
    trPointer = false,
    align,
    collection,
    collapse = true,
    expandAll = false,
    size = "lg",
    data,
    columns,
    propsData,
    tableHover = true,
    tableStriped = false,
    tableBorderd = false,
    tableBorderless = false,
    headColor = "null",
    captionContent,
    captionPosition = "top",
    tableResponsive = "xxl",
    eidtable = false,
    headSticky = true,
    headTextColor = "black",
    headBGC = "",
    divider,
    maxHeight = "500px",
    minHeight = "0px",
    onRowDoubleClick,
    onRowClick,
    onPageChange,
    onPageSizeChange,
  } = props;

  const [tableData, setTableData] = useState<any[]>([]);
  const [originalTableData, setOriginalTableData] = useState<any[]>([]);
  const [tableHeaders, setTableHeaders] = useState<any[]>([]);
  const [updateKey, setUpdateKey] = useState<number>(0);
  const [theadRows, setTheadRows] = useState<any[]>([]);
  const [maxDepth, setMaxDepth] = useState<number>(1);

  // 分页相关状态
  const [currentPageState, setCurrentPageState] = useState<number>(currentPage);
  const [pageSizeState, setPageSizeState] = useState<number>(pageSize);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);

  // 唯一 id 加上 uniqId 防止多个表格的相同复选框冲突
  const uniqId = useId();

  // 折叠的逻辑
  const handleCollapseClick = (row: any) => {
    const recursiveChangeCollapse = (data: any, id: any) => {
      return data.map((item: any, index: number) => {
        if (item[id] === row[id]) {
          item.collapse = !item.collapse;
        }
        if (item.children) {
          recursiveChangeCollapse(item.children, id);
        }
        return item;
      });
    };
    const newTableData = recursiveChangeCollapse(tableData, id);
    setTableData(newTableData);
  };

  const generateHeaderStyle = (position: string) => {
    switch (position) {
      case "start":
        return "flex-start";

      case "end":
        return "flex-end";

      default:
        return "center";
    }
  };

  const judgeSortIconBGC = (prop: string, isDown?: boolean) => {
    const findItem = tableHeaders?.find((item: any) => item.prop === prop);
    if (!findItem) return;
    if (isDown) {
      if (findItem.isDown) {
        return "7px solid red";
      }
    } else {
      if (findItem.isUp) {
        return "7px solid red";
      }
    }
  };

  // 判断每一列的 对齐方式
  const judgeTdAlign = (data: any) => {
    switch (data.align || align) {
      case "start":
        return "justify-content-start";

      case "end":
        return "justify-content-end";
      default:
        return "justify-content-center";
    }
  };

  /**
   *
   * @param data 父级的那一行数据
   * @param colProps 当前列的属性
   * @param colIndex 当前列的索引
   * @returns
   */
  const judgeChildCellAlign = (data: any, colProps: any, colIndex: number) => {
    return !colIndex && data.children?.length
      ? "start" // 父级存在子级时，第一列左对齐
      : colProps.align || align;
  };

  // 排序的逻辑--坑：一定要使用 [...preArr].sort，不能直接preArr.sort，这样会影响原来的数据，有Bug！！！
  const handleSortable = (prop: string, isDown?: boolean) => {
    const tempData = JSON.parse(JSON.stringify(data));
    setTableHeaders((preArr: any) =>
      preArr.map((item: any) => {
        if (prop === item.prop) {
          if (isDown) {
            item.isDown = !item.isDown;
            item.isUp = false;
            // 需要降序排序
            if (item.isDown) {
              setTableData((preArr: any) => {
                // 先对整个preArr进行深拷贝--不然会把原来的数据也改变掉，导致取消排序的时候无法正确的恢复数据到最初状态
                const newArr = JSON.parse(JSON.stringify(preArr));
                return newArr
                  .map((item: any) => {
                    // 对item.children进行深拷贝（假设它是数组，如果可能不存在要做相应的判断处理）
                    const childrenCopy = item.children
                      ? JSON.parse(JSON.stringify(item.children))
                      : [];
                    if (childrenCopy.length > 0) {
                      // 对拷贝后的childrenCopy进行排序
                      childrenCopy.sort((a: any, b: any) =>
                        a[prop] < b[prop] ? 1 : -1
                      );
                      item.children = childrenCopy;
                    }
                    return item;
                  })
                  .sort((a: any, b: any) => (a[prop] < b[prop] ? 1 : -1));
              });
            } else {
              setTableData(tempData);
            }
          } else {
            item.isUp = !item.isUp;
            item.isDown = false;
            // 需要升序排序
            if (item.isUp) {
              setTableData((preArr: any) => {
                // 先对整个preArr进行深拷贝--不然会把原来的数据也改变掉，导致取消排序的时候无法正确的恢复数据到最初状态
                const newArr = JSON.parse(JSON.stringify(preArr));
                return newArr
                  .map((item: any) => {
                    // 对item.children进行深拷贝（假设它是数组，如果可能不存在要做相应的判断处理）
                    const childrenCopy = item.children
                      ? JSON.parse(JSON.stringify(item.children))
                      : [];
                    if (childrenCopy.length > 0) {
                      // 对拷贝后的childrenCopy进行排序
                      childrenCopy.sort((a: any, b: any) =>
                        a[prop] > b[prop] ? 1 : -1
                      );
                      item.children = childrenCopy;
                    }
                    return item;
                  })
                  .sort((a: any, b: any) => (a[prop] > b[prop] ? 1 : -1));
              });
            } else {
              setTableData(tempData);
            }
          }
        }
        return item;
      })
    );

    // setTableData((preArr: any) => preArr.sort((a: any, b: any) => (a[prop] > b[prop] ? 1 : -1)));
    /* if (isDown) {
    const findItem = tableHeaders.find((item: any) => item.prop === prop);

    } */
  };
  /**
   *
   * @param array 列数组
   * @param data 父级的那一行数据，巧妙化解了第一列左对齐的问题，可以通过父级是否有子数据来判断是否需要左对齐
   * @param rowIndex 行索引
   * @param verticalAlignObject 垂直对齐方式对象
   * @param widthObject 宽度对象
   * @param textPositionObject 文字位置对象
   * @param level 层级
   * @returns
   */

  const renderChildren = (
    array: any,
    data: any,
    rowIndex: number,
    verticalAlignObject: any,
    widthObject: any,
    textPositionObject: any,
    level: number = 0
  ) => {
    level++;
    return (
      data.collapse && // 可以折叠并且有子级才去展示子数据
      data.children &&
      data.children.map((childData: any, index: number) => (
        <Fragment key={childData[id]}>
          <tr
            onClick={(e: any) => handleRowClick(childData, e)}
            className={`tr-content tr-content ${
              childData.checked === true ? "tr-checked" : ""
            } collapse-table-tr animate__animated animate__fadeIn`}
            style={{
              ...(clickChecked || trPointer ? { cursor: "pointer" } : ""),
              ...(!tableBorderd ? { borderBottom: "1px solid #f0f0f0" } : {}),
            }}
            key={childData[id]}
            /* style={{
                    ...(data.collapse ? { display: '' } : { display: 'none' }),
                }} */
          >
            {/* 复选框框 */}
            {collection && (
              <td
                scope="row"
                style={{
                  minWidth: !compact ? "50px" : "30px",
                  width: !compact ? "50px" : "30px",
                  maxWidth: !compact ? "50px" : "30px",
                  verticalAlign: "middle",
                }}
                className={`text-center py-1 ${compact ? "p-0" : tdPadding}`}
              >
                <input
                  className={tdPadding}
                  name={childData[id] + uniqId} // 加上 uniqId 防止多个表格的相同复选框冲突
                  id={childData[id] + uniqId}
                  checked={childData.checked === true}
                  onChange={(e: any) => handleCheckboxChange(childData, e)}
                  type={!multiple ? "radio" : "checkbox"}
                />
              </td>
            )}
            {/* 索引框 */}
            {showIndex && (
              <th
                className={`text-center py-1 ${compact ? "p-0" : tdPadding}`}
                style={{
                  minWidth: !compact ? "50px" : "30px",
                  width: !compact ? "50px" : "30px",
                  maxWidth: !compact ? "50px" : "30px",
                  padding: "0px",
                  alignContent: "center",
                  fontWeight: headerFontWeight,
                }}
              >
                {`${rowIndex + 1}.${index + 1}`}
              </th>
            )}
            {props.children
              ? React.Children.map(array, (col, colIndex) => {
                  let colProps = col.props; // 有 children 就肯定有 props
                  let prop = colProps.prop;
                  if (React.isValidElement(col)) {
                    const enhancedChild = React.cloneElement(col, {
                      parentId: childData.parentId, // 父级id
                      collapse: childData.collapse,
                      onExpand: () => handleCollapseClick(childData),
                      isParent: !colIndex && childData.children, // 是否是父级的条件：第一列且存在 children
                      value: childData[prop],
                      rowData: childData,
                      eidtable,
                      prop: prop,
                      rowIndex: rowIndex,
                      colIndex: colIndex,
                      align: judgeChildCellAlign(data, colProps, colIndex),

                      maxWidth: colProps.maxWidth || maxWidth,
                      showTip: colProps.showTip || showTip,
                    } as React.Attributes);
                    return (
                      <td
                        // 这边也不用在子级的第一列在最左侧了
                        // colIndex === 0 ? 'text-start' :
                        className={`text-${colProps.align} py-1 ${
                          compact ? "p-0" : tdPadding
                        }`}
                        style={{
                          verticalAlign: verticalAlignObject[prop],
                          width: widthObject[prop],
                          overflowWrap: "break-word",
                          wordWrap: "break-word",
                          wordBreak: "break-word",
                          maxWidth: colProps.maxWidth || maxWidth,
                          [`${!colIndex ? "paddingLeft" : ""}`]: "40px",
                        }}
                        key={colIndex}
                      >
                        <div
                          className={`collapse-table-td d-flex ${judgeTdAlign(
                            colProps
                          )}`}
                          style={{
                            paddingLeft: !colIndex ? level * 15 + "px" : 0,
                          }}
                        >
                          {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                          {colProps.showTip ? (
                            <Tooltip position="right" text={childData[prop]}>
                              {enhancedChild}
                            </Tooltip>
                          ) : (
                            enhancedChild
                          )}
                        </div>
                      </td>
                    );
                  }
                })
              : recursiveGenerateTableHeaderRows(columns).map(
                  (col: any, colIndex: number) => {
                    let colProps = col.props ? col.props : col; // 有 children 就肯定有 props，没有 children 就没有 props，直接取 col
                    let prop = colProps.prop;
                    const childTableCellProps = {
                      parentId: childData.parentId, // 父级id
                      collapse: childData.collapse,
                      onExpand: () => handleCollapseClick(childData),
                      isParent: !colIndex && childData.children,
                      value: childData[prop],
                      rowData: childData,
                      eidtable,
                      prop: prop,
                      rowIndex: rowIndex,
                      colIndex: colIndex,
                      align: judgeChildCellAlign(data, colProps, colIndex),
                      maxWidth: colProps.maxWidth || maxWidth,
                      showTip: colProps.showTip || showTip,
                    };
                    return (
                      <td
                        // 这边也不用在子级的第一列在最左侧了
                        // colIndex === 0 ? 'text-start' :
                        className={`text-${colProps.align} py-1 ${
                          compact ? "p-0" : tdPadding
                        }`}
                        style={{
                          verticalAlign: verticalAlignObject[prop],
                          width: widthObject[colProps.prop],
                          overflowWrap: "break-word",
                          wordWrap: "break-word",
                          wordBreak: "break-word",
                          maxWidth: colProps.maxWidth || maxWidth,
                          [`${!colIndex ? "paddingLeft" : ""}`]: "40px",
                        }}
                        key={colIndex}
                      >
                        <div
                          className={`collapse-table-td d-flex ${judgeTdAlign(
                            colProps
                          )}`}
                          style={{
                            paddingLeft: !colIndex ? level * 15 + "px" : 0,
                          }}
                        >
                          {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                          {colProps.showTip ? (
                            <Tooltip position="right" text={childData[prop]}>
                              {<TableCell {...childTableCellProps}></TableCell>}
                            </Tooltip>
                          ) : (
                            <TableCell {...childTableCellProps}></TableCell>
                          )}
                        </div>
                      </td>
                    );
                  }
                )}
          </tr>
          {/* {childData.children?.lentg > 0 ? '有孩子' : null} */}
          {childData.children?.length > 0
            ? renderChildren(
                array,
                childData,
                rowIndex,
                verticalAlignObject,
                widthObject,
                textPositionObject,
                level
              )
            : null}
        </Fragment>
      ))
    );
  };

  // 计算每一列的宽度
  const calculateHeaderWidth = (columns: any[]) => {
    console.log("calculateHeaderWidth-------------: ");
    const titleLengthObj: any = {};
    const newHeaderLabels = columns.map((item: any) => {
      return {
        title: item.props.title,
        prop: item.props.prop,
      };
    });

    const totalLabelLength = newHeaderLabels.reduce(
      (acc, curr) => acc + curr.title?.length,
      0
    );

    newHeaderLabels.forEach((item: any) => {
      titleLengthObj[item.prop] =
        Number((item.title?.length / totalLabelLength).toFixed(2)) * 100 + "%";
    });

    return titleLengthObj;
  };

  //   渲染表头宽度和对齐方式所需数据
  let array: any = [];
  if (props.children) {
    if (!props.children?.length) {
      array.push(props.children);
    } else {
      array = props.children;
    }
  } else {
    array = recursiveGenerateTableHeaderRows(columns).map((item: any) => {
      item.props = item;
      return item;
    });
  }
  let widthObject: any = {};
  const textPositionObject: any = {}; // 优先使用 每一列的 align，table 的 align 次之，都没的话默认居中
  const verticalAlignObject: any = {};
  array.forEach((item: any) => {
    if (item?.props) {
      widthObject[item.props.prop] = item.props.width;
      // 优先使用 每一列的 align，table 的 align 次之，都没的话默认居中(align默认等于 center)
      textPositionObject[item.props.prop] = item.props.align || align;
      verticalAlignObject[item.props.prop] =
        item.props.verticalAlign || "middle";
    }
  });
  if (
    !isEmptyO(widthObject) &&
    Object.values(widthObject).every((item: any) => !item)
  ) {
    widthObject = calculateHeaderWidth(array);
  }
  /**
   * 表头渲染逻辑
   */
  const generateTheadRows = (columns: any) => {
    const maxDepth = findMaxDepth(columns);
    setMaxDepth(maxDepth);
    const rows: any = Array.from({ length: maxDepth }, () => []);

    const processColumns = (cols: any, depth: number) => {
      cols.forEach((col: any) => {
        const cell = {
          title: col.title,
          colSpan: getColSpan(col, depth),
          rowSpan: col.children?.length ? 1 : maxDepth - depth,
          ...col,
        };
        if (!rows[depth]) {
          rows[depth] = [];
        }
        rows[depth].push(cell);
        if (col.children) {
          processColumns(col.children, depth + 1);
        }
      });
    };

    processColumns(columns, 0);
    return rows;
  };
  const findMaxDepth = (columns: any) => {
    let maxDepth = 0;
    columns.forEach((column: any) => {
      const depth = getColumnDepth(column);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    });
    return maxDepth;
  };
  const getColumnDepth = (column: any) => {
    if (!column.children) {
      return 1;
    }
    let maxChildDepth = 0;
    column.children.forEach((child: any) => {
      const childDepth = getColumnDepth(child);
      if (childDepth > maxChildDepth) {
        maxChildDepth = childDepth;
      }
    });
    return maxChildDepth + 1;
  };
  const getColSpan = (column: any, depth: number) => {
    if (!column.children) {
      return 1;
    }
    let totalColSpan = 0;
    column.children.forEach((child: any) => {
      totalColSpan += getColSpan(child, depth + 1);
    });
    return totalColSpan;
  };

  useEffect(() => {
    const TheadRows = generateTheadRows(columns);
    setTheadRows(TheadRows);
  }, [columns]);

  useEffect(() => {}, []);

  const renderTableHeader = () => {
    return (
      <thead
        style={{
          position: headSticky ? "sticky" : "unset",
          top: 0,
          backgroundColor: `${headBGC}`,
          zIndex: 999,
        }}
        className={`text-${headTextColor}`}
      >
        {/* 选择框 */}
        {theadRows.map((child: any, index: number) => {
          if (child?.length) {
            return (
              <tr key={index}>
                {index === 0 && collection && (
                  <th
                    className={`${compact ? "p-0" : ""}`}
                    rowSpan={maxDepth}
                    scope="col th-collection"
                    style={{
                      minWidth: !compact ? "50px" : "30px",
                      width: !compact ? "50px" : "30px",
                      maxWidth: !compact ? "50px" : "30px",
                      textAlign: "center",
                    }}
                  >
                    {multiple && (
                      <input
                        checked={checkedAll}
                        onChange={handleCheckedAllChange}
                        type={!multiple ? "radio" : "checkbox"}
                      />
                    )}
                  </th>
                )}
                {/* 索引 */}
                {index === 0 && showIndex && (
                  <th
                    className={`${compact ? "p-0" : ""}`}
                    rowSpan={maxDepth}
                    scope="col th-index"
                    style={{
                      minWidth: !compact ? "50px" : "30px",
                      width: !compact ? "50px" : "30px",
                      maxWidth: !compact ? "50px" : "30px",
                    }}
                  ></th>
                )}
                {child.map((item: any) => {
                  return (
                    <th
                      rowSpan={item.rowSpan}
                      colSpan={item.colSpan}
                      style={{
                        whiteSpace: "nowrap",
                        width: widthObject[item.prop],
                        fontWeight: headerFontWeight,
                      }}
                      className={`${
                        textPositionObject[item.prop]
                          ? "text-" + textPositionObject[item.prop]
                          : ""
                      } ${compact ? "p-0" : ""} align-middle`}
                      scope="col"
                      key={item.title}
                    >
                      <div
                        className="header-content"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: generateHeaderStyle(
                            textPositionObject[item.prop]
                          ),
                        }}
                      >
                        {/* header-text 去掉 me-2 属性 */}
                        <span className="header-text">{item.title}</span>
                        {item.sortable && (
                          <div className="header-icon ms-1">
                            <i
                              style={{
                                borderBottom:
                                  judgeSortIconBGC(item.prop) ||
                                  "7px solid #000",
                              }}
                              onClick={() => handleSortable(item.prop)}
                              className="icon sort-up"
                            ></i>
                            <i
                              style={{
                                borderTop:
                                  judgeSortIconBGC(item.prop, true) ||
                                  "7px solid #000",
                              }}
                              onClick={() => handleSortable(item.prop, true)}
                              className="icon sort-down"
                            ></i>
                          </div>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          }
        })}
      </thead>
    );
  };

  // 渲染折叠的子组件
  const renderTableBody = () => {
    return (
      <tbody className={`table-body ${divider ? "table-group-divider" : ""}`}>
        {tableData.length > 0 &&
          paginatedData.map((data: any, rowIndex: number) => {
            return (
              // 加上 uniqId 防止多个表格的相同复选框冲突
              <Fragment key={data[id] + uniqId}>
                <tr
                  onClick={(e: any) => handleRowClick(data, e)}
                  // onDoubleClick={() => handleRowDoubleClick(data)}
                  key={rowIndex}
                  className={`tr-content ${
                    data.checked === true ? "tr-checked" : ""
                  }`}
                  style={{
                    ...(clickChecked || trPointer ? { cursor: "pointer" } : ""),
                    ...(!tableBorderd
                      ? { borderBottom: "1px solid #f0f0f0" }
                      : {}),
                  }}
                >
                  {collection && (
                    // 复选框
                    <td
                      scope="row"
                      style={{
                        minWidth: !compact ? "50px" : "30px",
                        width: !compact ? "50px" : "30px",
                        maxWidth: !compact ? "50px" : "30px",
                        verticalAlign: "middle",
                      }}
                      className={`text-center py-1 ${
                        compact ? "p-0" : tdPadding
                      }`}
                    >
                      <input
                        className={tdPadding}
                        name={data[id] + uniqId} // 加上 uniqId 防止多个表格的相同复选框冲突
                        id={data[id] + uniqId}
                        checked={data.checked === true}
                        onChange={(e) => handleCheckboxChange(data, e)}
                        type={!multiple ? "radio" : "checkbox"}
                      />
                    </td>
                  )}
                  {showIndex && (
                    // 索引框
                    <td
                      className={`text-center py-1 ${
                        compact ? "p-0" : tdPadding
                      }`}
                      scope="col"
                      style={{
                        alignContent: "center",
                        padding: "0px",
                        minWidth: !compact ? "50px" : "30px",
                        width: !compact ? "50px" : "30px",
                        maxWidth: !compact ? "50px" : "30px",
                        /* ...(data.children ? { backgroundColor: '#fff', boxShadow: 'none' } : {}), */
                      }}
                    >
                      {rowIndex + 1}
                    </td>
                  )}
                  {props.children
                    ? React.Children.map(array, (col, colIndex) => {
                        const colProps = col.props; // 有 children 就肯定有 props
                        let prop = colProps.prop;

                        if (React.isValidElement(col)) {
                          const enhancedChild = React.cloneElement(col, {
                            onExpand: () => handleCollapseClick(data),
                            isParent: !colIndex && collapse && data.children,
                            value: data[`${prop}`],
                            rowData: data,
                            eidtable,
                            prop: prop,
                            rowIndex: rowIndex,
                            colIndex: colIndex,
                            canCollapse: data.children,
                            collapse: data.collapse,
                            // 防止 Table 的 align 不生效的bug
                            align:
                              !colIndex && collapse && data.children
                                ? "start"
                                : colProps.align || align,
                            width: widthObject[colProps.prop],
                            maxWidth: colProps.maxWidth || maxWidth,
                            showTip: colProps.showTip || showTip,
                          } as React.Attributes);
                          return (
                            <td
                              // 父级第一列不需要在 最左侧了
                              // !colIndex && collapse && data.children ? 'text-start' : `text-${textPositionObject[prop]}`
                              className={`text-${
                                colProps.align || align
                              } py-1 ${compact ? "p-0" : tdPadding}`}
                              style={{
                                verticalAlign: verticalAlignObject[prop],
                                width: widthObject[colProps.prop],
                                maxWidth: colProps.maxWidth || maxWidth,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
                                // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
                                whiteSpace: "nowrap",
                                /*  [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px', */
                              }}
                              key={colIndex}
                            >
                              {/* 整个子组件展示的位置 */}
                              <div
                                className={`collapse-table-td d-flex ${judgeTdAlign(
                                  colProps
                                )}`}
                              >
                                {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                                {colProps.showTip ? (
                                  <Tooltip text={data[prop]}>
                                    {enhancedChild}
                                  </Tooltip>
                                ) : (
                                  enhancedChild
                                )}
                              </div>
                            </td>
                          );
                        }
                      })
                    : recursiveGenerateTableHeaderRows(columns).map(
                        (col: any, colIndex: number) => {
                          const colProps = col.props ? col.props : col; // 有 children 就肯定有 props，没有 children 的话，props 就是 col 本身
                          let prop = colProps.prop;
                          const tableCellProps = {
                            onExpand: () => handleCollapseClick(data),
                            isParent: !colIndex && collapse && data.children,
                            value: data[`${prop}`],
                            rowData: data,
                            eidtable,
                            prop: prop,
                            rowIndex: rowIndex,
                            colIndex: colIndex,
                            canCollapse: data.children,
                            collapse: data.collapse,
                            // 防止 Table 的 align 不生效的bug
                            align:
                              !colIndex && collapse && data.children
                                ? "start"
                                : colProps.align || align,
                            width: widthObject[colProps.prop],
                            maxWidth: colProps.maxWidth || maxWidth,
                            showTip: colProps.showTip || showTip,
                          };
                          return (
                            <td
                              // 父级第一列不需要在 最左侧了
                              // !colIndex && collapse && data.children ? 'text-start' : `text-${textPositionObject[prop]}`
                              className={`text-${
                                colProps.align || align
                              } py-1 ${compact ? "p-0" : tdPadding}`}
                              style={{
                                verticalAlign: verticalAlignObject[prop],
                                width: widthObject[colProps.prop],
                                maxWidth: colProps.maxWidth || maxWidth,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
                                // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
                                whiteSpace: "nowrap",
                                /*  [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px', */
                              }}
                              key={colIndex}
                            >
                              {/* 整个子组件展示的位置 */}
                              <div
                                className={`collapse-table-td d-flex ${judgeTdAlign(
                                  colProps
                                )}`}
                              >
                                {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                                {colProps.showTip ? (
                                  <Tooltip text={data[prop]}>
                                    <TableCell {...tableCellProps}></TableCell>
                                  </Tooltip>
                                ) : (
                                  <TableCell {...tableCellProps}></TableCell>
                                )}
                              </div>
                            </td>
                          );
                        }
                      )}
                </tr>
                {/* ***************************************展开行********************************** */}
                {renderChildren(
                  array,
                  data,
                  rowIndex,
                  verticalAlignObject,
                  widthObject,
                  textPositionObject
                )}
              </Fragment>
            );
          })}
      </tbody>
    );
  };

  // 选择逻辑
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  /**
   *
   * 双击选中这条tr
   */
  const handleRowDoubleClick = (row: any) => {
    const finalChecked: boolean = !row.checked;
    setTableData((preArr: any) => {
      return preArr.map((item: any) => {
        if (item[id] === row[id]) {
          item.checked = !item.checked;
        } else {
          if (!multiple) {
            item.checked = false;
          }
        }
        return item;
      });
    });

    if (finalChecked) {
      onRowDoubleClick && onRowDoubleClick(row);
    } else {
      onRowDoubleClick && onRowDoubleClick({});
    }
  };

  const recursiveUpdateParentChecked = (
    child: any,
    parentData: any,
    id: any
  ) => {
    const parent = parentData.find((item: any) => {
      if (item[id] === child.parentId) {
        return item;
      } else {
        if (item.children?.length) {
          return recursiveUpdateParentChecked(child, item.children, id);
        }
      }
    });
    // 如果找到该节点的 父节点
    if (!isEmptyO(parent)) {
      const allChildrenChecked = parent.children.every(
        (child: any) => child.checked === true
      );
      const someChildrenChecked = parent.children.some(
        (child: any) => child.checked === true
      );
      if (allChildrenChecked) {
        parent.checked = true;
      } else if (someChildrenChecked) {
        parent.checked = "partial"; // 表示部分选中，你可以根据需求自定义状态
      } else {
        parent.checked = false;
      }
      if (parent.parentId) {
        // 如果父节点还有父节点，递归招它的父节点然后更新
        recursiveUpdateParentChecked(parent, tableData, id);
      }
    } else {
    }
  };

  /**
   *
   * 单击tr
   */
  const handleRowClick = (row: any, e: any) => {
    onRowClick && onRowClick(row);

    onRowDoubleClick && onRowDoubleClick(row);
    if (clickChecked) {
      // 新增标志位，用于判断是否是由复选框触发的点击
      const isCheckboxClick =
        e.target.type === "checkbox" || e.target.type === "radio";
      if (!isCheckboxClick) {
        handleCheckboxChange(row, e);
      }
    }
  };

  // 递归选中 默认选中的节点，子节点也要
  const recursiveCheckDefaultTableData = (
    data: any[],
    defaultCheckedList: any[]
  ) => {
    return data.map((item: any) => {
      if (defaultCheckedList.includes(item[id])) {
        item.checked = true;
        if (item.children) {
          // 父节点被选中，如果它有子节点，则递归选中子节点
          directlyUpdateChildrenCheckState(item.children, true);
        }
      }
      if (item.children?.length) {
        item.children = recursiveCheckDefaultTableData(
          item.children,
          defaultCheckedList
        );
      }
      return item;
    });
  };

  // 新增 默认选中 / 全选
  const recursiveCheckAll = (data: any[]) => {
    return data.map((item: any) => {
      item.checked = true;
      if (item.children?.length) {
        recursiveCheckAll(item.children);
      }
      return item;
    });
  };
  const handleDefaultChecked = (tempData?: any) => {
    if (checkAll) {
      const newTableData = recursiveCheckAll(tempData);
      setTableData(newTableData);
      setCheckedAll(true); // 头部也要勾选上
    } else if (
      Array.isArray(defaultCheckedList) &&
      defaultCheckedList.length > 0
    ) {
      // 如果传入的是数组，则去 递归选中这些节点，子节点也要
      const newTableData = recursiveCheckDefaultTableData(
        JSON.parse(JSON.stringify(tempData)),
        defaultCheckedList
      );
      setTableData(newTableData);
    }
  };

  // 父节点直接更新它的子节点的 checked 状态
  const directlyUpdateChildrenCheckState = (data: any[], checked?: boolean) => {
    return data.map((item: any) => {
      item.checked = checked;
      if (item.children?.length) {
        directlyUpdateChildrenCheckState(item.children, checked);
      }
      return item;
    });
  };

  // 点击 单/复选框
  const handleCheckboxChange = (row: any, e: any) => {
    e.stopPropagation();
    setUpdateKey(updateKey + 1);

    // 更新 tableData 中的 checked 状态
    const recursiveUpdateTableDataCheckState = (data: any[]) => {
      return data.map((item: any) => {
        // 如果刚好点击的是第一级的节点，则进入到这个if，选中它的所有子节点
        if (item[id] === row[id]) {
          item.checked = !(item.checked === true ? true : false); // 为了做 partial 判断
          if (item.children?.length) {
            item.children = directlyUpdateChildrenCheckState(
              item.children,
              item.checked === true ? true : false
            );
          }
          // 如果点击的不是第一级的节点，有可能是二级节点，也要递归执行
          // 如果去掉这个，只会在点击 一级节点 的时候会把它的子节点全部选中
        } else if (item.children?.length) {
          item.children = recursiveUpdateTableDataCheckState(item.children); // 这步要先执行，不然下面的 else if 判断不会进入 不符合的父节点的子级节点
        } /* else if (!multiple) {
                item.checked = false;
            } */
        return item;
      });
    };

    // 如果是单选，则在选择完一个节点后，要把其他节点的 check 状态都置为 false
    const recursiveUpdateOtherTableDataCheck = (data: any, row: any) => {
      return data.map((item: any) => {
        if (item[id] !== row[id]) {
          item.checked = false;
          if (item.children?.length) {
            item.children = recursiveUpdateOtherTableDataCheck(
              item.children,
              row
            );
          }
        }
        return item;
      });
    };

    if (clickChecked || collection) {
      // 1. 如果可以选中，则去更新选中状态
      recursiveUpdateTableDataCheckState(tableData);
      // 2. 如果是单选，则在选择完一个节点后，要把其他节点的 check 状态都置为 false
      if (!multiple) {
        recursiveUpdateOtherTableDataCheck(tableData, row);
      }
    }
    // 3. 如果有父节点，则去更新父节点的选中状态
    if (row.parentId) {
      recursiveUpdateParentChecked(row, tableData, id);
    }
    // 4. 判断是不是全选
    setCheckedAll(areAllChecked(tableData));
  };

  function areAllChecked(data: any[]): any {
    // 遍历数组中的每个对象
    return data?.every((item) => {
      // 检查当前对象的 `checked` 属性
      if (!item.checked) return false;

      // 如果对象有 `children` 属性，递归检查其子对象
      if (item.children) {
        return areAllChecked(item.children);
      }

      return true;
    });
  }

  // 点击 全选 / 全不选
  const handleCheckedAllChange = (e: any) => {
    const checkedAll = e.target.checked;
    setCheckedAll(checkedAll);
    const updateCheckedState = (data: any[]) => {
      return data.map((item: any) => {
        // 更新当前项目的 `checked` 状态
        item.checked = checkedAll;

        // 如果当前项目有 `children` 属性，递归更新其 `children` 的 `checked` 状态
        if (item.children) {
          item.children = updateCheckedState(item.children);
        }

        return item;
      });
    };

    setTableData(updateCheckedState(tableData) as any);
  };

  // 清空选中
  const handleClearChecked = () => {
    // 递归调用清空选中
    directlyUpdateChildrenCheckState(tableData, false);
  };

  // 递归获取所有选中项
  const recursiveGetCheckedList = (data: any[], checkedList: any[] = []) => {
    data.forEach((item: any) => {
      if (item.checked === true) {
        checkedList.push(item);
      }
      if (item.children) {
        recursiveGetCheckedList(item.children, checkedList);
      }
    });
    return checkedList;
  };

  const handleGetCheckedList = () => {
    const checkedList: any[] = [];
    return recursiveGetCheckedList(
      JSON.parse(JSON.stringify(tableData)),
      checkedList
    );
  };

  const handleExpandAll = () => {
    const data = recursiveExpandTable(
      JSON.parse(JSON.stringify(tableData)),
      true
    );
    setTableData(data);
  };

  const handleFoldAll = () => {
    const data = recursiveExpandTable(
      JSON.parse(JSON.stringify(tableData)),
      false
    );
    setTableData(data);
  };

  // 滚到底部
  const handleScrollToEnd = () => {
    // 表格滚动到底部
    const table = document.querySelector(".table-wrapper");
    const tableBody = document.querySelector(".table-body");
    if (tableBody && table) {
      table.scrollTo({
        top: tableBody.clientHeight,
        behavior: "smooth",
      });
    }
  };

  // 滚到底部
  const handleScrollToTop = () => {
    // 表格滚动到底部
    const table = document.querySelector(".table-wrapper");
    if (table) {
      table.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // 递归设置 pid
  const recursiveSetParentId = (data: any[], parentId: any) => {
    return data.map((item: any) => {
      item.parentId = parentId;
      if (item.children) {
        recursiveSetParentId(item.children, item[id]);
      }
      return item;
    });
  };

  // 递归展开表格
  const recursiveExpandTable = (
    tempData: any[],
    state: boolean = expandAll
  ) => {
    return tempData.map((item: any) => {
      item.collapse = state;
      if (item.children) {
        recursiveExpandTable(item.children, state); // 记得把 state 传到子级去去，不然子节点都会默认展开
      }
      return item;
    });
  };

  useEffect(() => {
    // 这个 useEffect 这边操作 tableData的地方 都要用同一个数据 tempData，不然数据会不对
    if (!data.length) {
      setTableData([]);
      setCheckedAll(false); // 数据为空的时候，也要把 表头全选置空
      return;
    }
    let tempData = JSON.parse(JSON.stringify(data));
    tempData = recursiveSetParentId(tempData, 0);
    const checkedAll = areAllChecked(tempData);
    setCheckedAll(checkedAll);
    if (collapse) {
      setTimeout(() => {
        const tableData = recursiveExpandTable(tempData);
        setTableData(tableData);
        setOriginalTableData(tableData);
      }, 10);
    } else {
      setTableData(tempData);
      setOriginalTableData(tempData);
    }

    if (tempData.length) {
      // 必须给个 10ms 的延迟，不然默认选中会出现问题
      setTimeout(() => {
        handleDefaultChecked(tempData);
      }, 10);
    }
  }, [data]);

  useEffect(() => {
    /* setTableData((preData: any) =>
          preData.map((item: any) => {
              const isChildrenAllChecked = areAllChecked(item.children);
              if (isChildrenAllChecked) {
                  item.checked = true;
              }
              return item;
          })
      ); */
  }, [tableData]);

  useEffect(() => {
    if (activeId) {
      const tempData = JSON.parse(JSON.stringify(data));
      const newTableData = tempData.map((item: any) => {
        // 判断 id 是否存在，如果 id 不存在，并且 activeId 也不存在，那也是相等的，得排除
        if (item[id] && item[id] === activeId) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      });
      setTimeout(() => {
        setTableData(newTableData); // 要给个 10ms 的定时器，因为上面其他的操作都给了 10ms 的定时器，不然数据会不对
      }, 10);
    }
  }, [activeId, data]);

  useEffect(() => {
    setTableHeaders(columns);
  }, [columns]);

  /*     useEffect(() => {
    
}, [tableHeaders]); */

  useImperativeHandle(tableRef, () => ({
    clearChecked: handleClearChecked,
    getCheckedList: handleGetCheckedList,
    expandAll: handleExpandAll,
    foldAll: handleFoldAll,
    scrollToEnd: handleScrollToEnd,
    scrollToTop: handleScrollToTop,
  }));

  // 计算分页数据
  const calculatePaginatedData = useCallback(() => {
    if (!pagination) {
      setPaginatedData(tableData);
      return;
    }
    const startIndex = (currentPageState - 1) * pageSizeState;
    const endIndex = startIndex + pageSizeState;
    const newPaginatedData = tableData.slice(startIndex, endIndex);
    setPaginatedData(newPaginatedData);
    setTotalPages(Math.ceil(tableData.length / pageSizeState));
  }, [tableData, currentPageState, pageSizeState, pagination]);

  // 生成页码数组
  // 生成页码数组
  const generatePageNumbers = () => {
    const result: any[] = [];
    const maxPagesShow = 5; // 最多显示5个页码（不包括省略号和首尾页码）

    if (totalPages <= maxPagesShow + 2) {
      // 如果总页数较少，直接显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        result.push({ page: i, type: "page" });
      }
    } else {
      // 始终显示第一页
      result.push({ page: 1, type: "page" });

      if (currentPageState <= maxPagesShow - 2) {
        // 当前页靠近开始
        for (let i = 2; i <= maxPagesShow; i++) {
          result.push({ page: i, type: "page" });
        }
        result.push({ page: 0, type: "ellipsis" });
        result.push({ page: totalPages, type: "page" });
      } else if (currentPageState >= totalPages - (maxPagesShow - 3)) {
        // 当前页靠近结束
        result.push({ page: 0, type: "ellipsis" });
        for (let i = totalPages - (maxPagesShow - 1); i <= totalPages; i++) {
          result.push({ page: i, type: "page" });
        }
      } else {
        // 当前页在中间
        result.push({ page: 0, type: "ellipsis" });
        for (let i = currentPageState - 1; i <= currentPageState + 1; i++) {
          result.push({ page: i, type: "page" });
        }
        result.push({ page: 0, type: "ellipsis" });
        result.push({ page: totalPages, type: "page" });
      }
    }

    return result;
  };

  // 处理页码改变
  const handlePageChange = (page: number, type?: "prev" | "next") => {
    if (type === "prev") {
      if (page <= 0) return;
    } else if (type === "next") {
      if (page >= totalPages + 1) return;
    }
    setCurrentPageState(page);
    onPageChange?.(page);
  };

  // 处理每页条数改变
  const handlePageSizeChange = (size: number) => {
    setPageSizeState(size);
    setCurrentPageState(1); // 重置到第一页
    onPageSizeChange?.(size);
  };

  useEffect(() => {
    calculatePaginatedData();
  }, [calculatePaginatedData]);

  // 渲染分页组件
  const renderPagination = () => {
    if (!pagination) return null;

    return (
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="d-flex align-items-center">
          {showTotal && <span className="me-3">共 {tableData.length} 条</span>}
          <select
            className="form-select form-select-sm me-2"
            style={{ width: "100px" }}
            value={pageSizeState}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} 条/页
              </option>
            ))}
          </select>
        </div>
        <div className="pagination d-flex align-items-center">
          <i
            onClick={() => handlePageChange(currentPageState - 1, "prev")}
            className={`prev-arrow rounded fa-solid fa-chevron-left ${
              currentPageState === 1 ? "disabled" : ""
            }`}
          ></i>
          <div className="page-numbers d-flex align-items-center mx-2">
            {generatePageNumbers().map((item, index) => (
              <React.Fragment key={index}>
                {item.type === "page" ? (
                  <button
                    className={`btn btn-sm page-number-item d-flex align-items-center justify-content-center mx-1 ${
                      item.page === currentPageState
                        ? "btn-primary"
                        : "btn-outline-secondary"
                    }`}
                    style={{
                      minWidth: "24px",
                      height: "26px",
                    }}
                    onClick={() => handlePageChange(item.page)}
                  >
                    {item.page}
                  </button>
                ) : (
                  <span className="mx-1 d-flex align-items-center">...</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <i
            className={`next-arrow rounded fa-solid fa-chevron-right ${
              currentPageState === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPageState + 1, "next")}
          ></i>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          minHeight: minHeight,
          maxHeight: maxHeight,
          overflow: "auto",
          width: tableWidth,
        }}
        className={`table-wrapper ${`table-responsive${
          "-" + tableResponsive
        }`}`}
      >
        <table
          style={{ background: tableBGC, width: tableWidth }}
          className={`table ${tableStriped ? "table-striped" : ""} ${
            tableBorderd ? "table-bordered" : "table-borderless"
          } table-${size} ${
            headColor ? `table-${headColor}` : ""
          } overflow-auto ${paginatedData.length === 0 ? "mb-0" : ""}`}
        >
          {showHeader && renderTableHeader()}
          {renderTableBody()}
        </table>
        {paginatedData.length === 0 && (
          <div className="text-center p-1">暂无数据~</div>
        )}
        {renderPagination()}
      </div>
    </>
  );
};

Table.TableCell = TableCell;

export default Table;
