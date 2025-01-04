import classNames from "classnames";
import React, {
  Fragment,
  ReactElement,
  useEffect,
  useId,
  useImperativeHandle,
  useState,
} from "react";
import TableCell from "./TableCell";
import "./index.scss";
import Tooltip from "../adou-tooltip";

export { TableCell };

interface TableProps {
  clickChecked?: boolean;
  showHeader?: boolean;
  defaultChecked?: any;
  headerFontWeight?: "normal" | "bold";
  width?: any; // 控制 table的宽度，太宽的话 可以形成滚动条
  tableBgc?: any;
  tableRef?: any;
  // activeId有值，才会在列表刷新的时候，高亮显示刷新列表前选中的行。否则一刷新就会清空选中行
  activeId?: number | string;
  maxWidth?: any;
  showIndex?: boolean;
  multiple?: boolean;
  id?: string;
  trPointer?: boolean;
  textPosition?: "center" | "start" | "end" | "justify";
  collection?: boolean;
  collapse?: boolean;
  expandAll?: boolean;
  eidtable?: boolean;
  size?: "lg" | "sm";
  data: any;
  headers?: any;
  propsData?: any;
  tableHover?: boolean;
  tableStriped?: boolean;
  tableBorderd?: boolean;
  tableBorderless?: boolean;
  headColor?: "light" | "dark";
  align?: "top" | "middle" | "bottom";
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
  onEditOK?: (data: any) => void;
  onRowDoubleClick?: (row: any) => void;
  onClearSelected?: () => void;
  onRowClick?: (row: any) => void;
}

const Table = (props: TableProps) => {
  const {
    clickChecked,
    showHeader = true,
    defaultChecked,
    headerFontWeight = "normal",
    width, // 控制 table的宽度，太宽的话 可以形成滚动条
    tableBgc,
    tableRef,
    activeId,
    maxWidth,
    showIndex = true,
    multiple = false,
    id = "id",
    trPointer = true,
    textPosition,
    collection,
    collapse,
    expandAll = true,
    size = "lg",
    data,
    headers,
    propsData,
    tableHover = true,
    tableStriped = true,
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
  } = props;

  const [tableData, setTableData] = useState<any[]>([]);
  const [originalTableData, setOriginalTableData] = useState<any[]>([]);
  const [tableHeaders, setTableHeaders] = useState<any[]>([]);

  // 更新的数据
  const [updateKey, setUpdateKey] = useState<number>(0);

  // 唯一 id 加上 uniqId 防止多个表格的相同复选框冲突
  const uniqId = useId();

  // 折叠的逻辑
  const handleCollapseClick = (row: any, rowIndex: number) => {
    setTableData((preArr: any) => {
      return preArr.map((item: any, index: number) => {
        if (index === rowIndex) {
          item.collapse = !item.collapse;
        }
        return item;
      });
    });
  };

  const generateHeaderStyle = (position: string) => {
    switch (position) {
      case "left":
        return "flex-start";

      case "right":
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

  // 渲染折叠的子组件
  const renderCollapseChildren = () => {
    let array: any = [];
    if (!props.children?.length) {
      array.push(props.children);
    } else {
      array = props.children;
    }

    let widthObject: any = {};
    const textPositionObject: any = {};
    const verticalAlignObject: any = {};
    array.forEach((item: any) => {
      if (item?.props) {
        widthObject[item.props.prop] = item.props.width;
        textPositionObject[item.props.prop] =
          item.props.textPosition || "center";
        verticalAlignObject[item.props.prop] =
          item.props.verticalAlign || "middle";
      }
    });
    if (Object.values(widthObject).every((item: any) => !item)) {
      widthObject = calculateHeaderWidth(array);
    } else {
    }
    return (
      <>
        {showHeader && (
          <thead
            style={{
              position: headSticky ? "sticky" : "unset",
              top: 0,
              backgroundColor: `${headBGC}`,
              zIndex: 999,
            }}
            className={`text-${headTextColor}`}
          >
            <tr>
              {/* 头部 */}
              {collection && (
                <>
                  {/* 复选框 */}
                  <th
                    scope="col th-collection"
                    style={{
                      minWidth: "50px",
                      width: "50px",
                      maxWidth: "50px",
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
                </>
              )}
              {/* 索引 */}
              {showIndex && (
                <>
                  {/* 索引框 */}
                  <th
                    scope="col th-index"
                    style={{
                      minWidth: "50px",
                      width: "50px",
                      maxWidth: "50px",
                    }}
                  ></th>
                </>
              )}
              {array &&
                array.map((child: any, rowIndex: number) => {
                  if (child?.props) {
                    return (
                      <th
                        style={{
                          whiteSpace: "nowrap",
                          width:
                            widthObject[
                              (child as React.ReactElement).props.prop
                            ],
                          fontWeight: headerFontWeight,
                        }}
                        className={`${
                          "text-" + textPositionObject[child.props.prop]
                        }`}
                        scope="col"
                        key={child.props.label}
                      >
                        <div
                          className="header-content"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: generateHeaderStyle(
                              textPositionObject[child.props.prop]
                            ),
                          }}
                        >
                          <span className="header-text me-2">
                            {child.props.label}
                          </span>
                          {child.props.sortable && (
                            <span className="header-icon">
                              <i
                                style={{
                                  borderBottom:
                                    judgeSortIconBGC(child.props.prop) ||
                                    "7px solid #000",
                                }}
                                onClick={() => handleSortable(child.props.prop)}
                                className="icon sort-up"
                              ></i>
                              <i
                                style={{
                                  borderTop:
                                    judgeSortIconBGC(child.props.prop, true) ||
                                    "7px solid #000",
                                }}
                                onClick={() =>
                                  handleSortable(child.props.prop, true)
                                }
                                className="icon sort-down"
                              ></i>
                            </span>
                          )}
                        </div>
                      </th>
                    );
                  }
                })}
            </tr>
          </thead>
        )}
        <tbody className={`${divider ? "table-group-divider" : ""}`}>
          {tableData.length > 0 &&
            tableData.map((data: any, rowIndex: number) => {
              return (
                // 加上 uniqId 防止多个表格的相同复选框冲突
                <Fragment key={data[id] + uniqId}>
                  <tr
                    onClick={() => handleRowClick(data)}
                    // onDoubleClick={() => handleRowDoubleClick(data)}
                    key={rowIndex}
                    className={`tr-content ${data.checked ? "tr-checked" : ""}`}
                    style={{ ...(trPointer ? { cursor: "pointer" } : "") }}
                  >
                    {collection && (
                      // 复选框
                      <td
                        scope="row"
                        style={{
                          minWidth: "50px",
                          width: "50px",
                          maxWidth: "50px",
                        }}
                        className="text-center"
                      >
                        <input
                          name={data[id] + uniqId} // 加上 uniqId 防止多个表格的相同复选框冲突
                          id={data[id] + uniqId}
                          checked={data.checked}
                          onChange={(e) => handleCheckboxChange(e, data)}
                          type={!multiple ? "radio" : "checkbox"}
                        />
                      </td>
                    )}
                    {showIndex && (
                      // 索引框
                      <td
                        className="text-center"
                        scope="col"
                        style={{
                          alignContent: "center",
                          padding: "0px",
                          minWidth: "50px",
                          width: "50px",
                          maxWidth: "50px",
                          /* ...(data.children ? { backgroundColor: '#fff', boxShadow: 'none' } : {}), */
                        }}
                      >
                        {rowIndex + 1}
                      </td>
                    )}
                    {React.Children.map(array, (child, colIndex) => {
                      let prop = (child as React.ReactElement).props.prop;
                      const childProps = (child as React.ReactElement).props;
                      if (React.isValidElement(child)) {
                        const enhancedChild = React.cloneElement(child, {
                          onExpand: () => handleCollapseClick(data, rowIndex),
                          isParent: !colIndex && collapse && data.children,
                          value: data[`${prop}`],
                          rowData: data,
                          eidtable,
                          prop: prop,
                          rowIndex: rowIndex,
                          colIndex: colIndex,
                          canCollapse: data.children,
                          collapse: data.collapse,
                          // 防止 Table 的 textPosition 不生效的bug
                          textPosition: textPositionObject[prop],
                          width: widthObject[childProps.prop],
                          // maxWidth: childProps.maxWidth,
                        } as React.Attributes);
                        return (
                          <td
                            className={`${
                              !colIndex && collapse && data.children
                                ? "text-start"
                                : `text-${textPositionObject[prop]}`
                            } `}
                            style={{
                              verticalAlign: verticalAlignObject[prop],
                              width: widthObject[childProps.prop],
                              // maxWidth: maxWidth || childProps.maxWidth,
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
                            <div className="collapse-table-td">
                              {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                              {childProps.tooltip ? (
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
                    })}
                  </tr>
                  {/* ***************************************展开行********************************** */}
                  {data.collapse &&
                    data.children &&
                    data.children.map((childData: any, index: number) => (
                      <tr
                        onClick={() => handleRowClick(data, true, childData)}
                        className="collapse-table-tr animate__animated animate__fadeIn"
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
                              minWidth: "50px",
                              width: "50px",
                              maxWidth: "50px",
                            }}
                            className="text-center"
                          >
                            <input
                              name={childData[id] + uniqId} // 加上 uniqId 防止多个表格的相同复选框冲突
                              id={childData[id] + uniqId}
                              checked={childData.checked}
                              onChange={(e: any) =>
                                handleCheckboxChange(e, childData)
                              }
                              type={!multiple ? "radio" : "checkbox"}
                            />
                          </td>
                        )}
                        {/* 索引框 */}
                        {showIndex && (
                          <th
                            className="text-center"
                            style={{
                              minWidth: "50px",
                              width: "50px",
                              maxWidth: "50px",
                              padding: "0px",
                              alignContent: "center",
                              fontWeight: headerFontWeight,
                            }}
                          >
                            {`${rowIndex + 1}.${index + 1}`}
                          </th>
                        )}
                        {React.Children.map(array, (child, colIndex) => {
                          let prop = (child as React.ReactElement).props.prop;
                          if (React.isValidElement(child)) {
                            const enhancedChild = React.cloneElement(child, {
                              value: childData[prop],
                              rowData: childData,
                              eidtable,
                              prop: prop,
                              rowIndex: rowIndex,
                              colIndex: colIndex,
                              textPosition,
                            } as React.Attributes);
                            return (
                              <td
                                className={`${
                                  colIndex === 0 ? "text-left" : "text-center"
                                }`}
                                style={{
                                  verticalAlign: verticalAlignObject[prop],
                                  width:
                                    widthObject[
                                      (child as React.ReactElement).props.prop
                                    ],
                                  overflowWrap: "break-word",
                                  wordWrap: "break-word",
                                  wordBreak: "break-word",
                                  [`${!colIndex ? "paddingLeft" : ""}`]: "40px",
                                }}
                                key={colIndex}
                              >
                                <div className="collapse-table-td">
                                  {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                                  {(child as ReactElement).props.tooltip ? (
                                    <Tooltip
                                      position="right"
                                      text={childData[prop]}
                                    >
                                      {enhancedChild}
                                    </Tooltip>
                                  ) : (
                                    enhancedChild
                                  )}
                                </div>
                              </td>
                            );
                          }
                        })}
                      </tr>
                    ))}
                </Fragment>
              );
            })}
        </tbody>
      </>
    );
  };

  const calculateHeaderWidth = (headerLabels: any[]) => {
    const labelLengthObj: any = {};
    const newHeaderLabels = headerLabels.map((item: any) => {
      return {
        label: item.props.label,
        prop: item.props.prop,
      };
    });

    const totalLabelLength = newHeaderLabels.reduce(
      (acc, curr) => acc + curr.label.length,
      0
    );

    newHeaderLabels.forEach((item: any) => {
      labelLengthObj[item.prop] =
        Number((item.label?.length / totalLabelLength).toFixed(2)) * 100 + "%";
    });

    return labelLengthObj;
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

  /**
   *
   * 单击tr
   */
  const handleRowClick = (row: any, isChildren?: boolean, childData?: any) => {
    setUpdateKey(updateKey + 1);
    // handleCollapseClick(row, rowIndex!);
    if (clickChecked || collection) {
      const data: any = tableData.map((item: any) => {
        if (isChildren) {
          if (item[id] === row[id]) {
            const rowChildren = row.children;
            const updatedChildren = rowChildren.map((child: any) => {
              if (child[id] === childData[id]) {
                child.checked = !child.checked;
              } else if (!multiple) {
                child.checked = false;
              }
              return child;
            });
            item.children = updatedChildren;
            const isChildrenAllChecked = areAllChecked(updatedChildren);
            item.checked = isChildrenAllChecked;
          }
        } else {
          if (item[id] === row[id]) {
            item.checked = !item.checked;
            if (row.children?.length) {
              // 将它的子级的所有数据都选中
              row.children = row.children.map((child: any) => {
                child.checked = item.checked;
                return child;
              });
            }
          } else {
            if (!multiple) {
              item.checked = false;
            }
          }
        }
        return item;
      });
      setTableData(data);
    }
    if (collection) {
      setCheckedAll(areAllChecked(data));
    }
    onRowClick && onRowClick(row);

    onRowDoubleClick && onRowDoubleClick(row);
  };

  // 新增 默认选中 / 全选
  const handleDefaultChecked = () => {
    if (defaultChecked === "all") {
      setTableData((preData: any) =>
        preData.map((item: any) => {
          item.checked = true;
          item.children = item.children?.map((item: any) => {
            item.checked = true;
            return item;
          });

          return item;
        })
      );
      setCheckedAll(true); // 头部也要勾选上
    }
  };

  const handleCheckboxChange = (e: any, row: any) => {
    const checked = e.target.checked;
    row.checked = checked;
    setTableData((preArr: any) => {
      return preArr.map((item: any) => {
        if (item[id] === row[id]) {
          item.checked = checked;
        }
        return item;
      });
    });
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

  const handleClearChecked = () => {
    setTableData((preData: any) =>
      preData.map((item: any) => {
        item.checked = false;
        return item;
      })
    );
  };

  const handleGetCheckedList = () => {
    return tableData.filter((item: any) => item.checked);
  };

  useEffect(() => {
    const tempData = JSON.parse(JSON.stringify(data));
    const checkedAll = areAllChecked(tempData);
    setCheckedAll(checkedAll);
    if (collapse) {
      const tableData = tempData.map((item: any) => {
        item.collapse = expandAll;
        return item;
      });
      setTableData(tableData);
      setOriginalTableData(tableData);
    } else {
      setTableData(tempData);
      setOriginalTableData(tempData);
    }

    if (tempData.length) {
      // 必须给个 10ms 的延迟，不然默认选中会出现问题
      setTimeout(() => {
        handleDefaultChecked();
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
    setTableData((preData: any) =>
      preData.map((item: any) => {
        // 判断 id 是否存在，如果 id 不存在，并且 activeId 也不存在，那也是相等的，得排除
        if (activeId) {
          if (item[id] && item[id] === activeId) {
            item.checked = true;
          } else {
            item.checked = false;
          }
        }
        return item;
      })
    );
  }, [activeId]);

  useEffect(() => {
    setTableHeaders(headers);
  }, [headers]);

  /*     useEffect(() => {
      
  }, [tableHeaders]); */

  useImperativeHandle(tableRef, () => ({
    clearChecked: handleClearChecked,
    getCheckedList: handleGetCheckedList,
  }));

  return (
    <>
      <div
        style={{
          minHeight: minHeight,
          maxHeight: maxHeight,
          overflow: "auto",
          width,
        }}
        className={`table-wrapper ${`table-responsive${
          "-" + tableResponsive
        }`}`}
      >
        <table
          style={{ background: tableBgc, width }}
          className={`table ${tableStriped ? "table-striped" : ""} ${
            tableBorderd ? "table-bordered" : "table-borderless"
          } table-${size} ${
            headColor ? `table-${headColor}` : ""
          } overflow-auto`}
        >
          {renderCollapseChildren()}
        </table>
      </div>
    </>
  );
};

Table.TableCell = TableCell;

export default Table;
