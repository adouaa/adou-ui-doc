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
import isEmptyO from "@site/src/common/utils/isEmptyO";

export { TableCell };

interface TableProps {
    checkAll?: boolean;
    tdPadding?: string;
    clickChecked?: boolean;
    showHeader?: boolean;
    defaultCheckedList?: any;
    headerFontWeight?: 'normal' | 'bold';
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
    align?: 'center' | 'start' | 'end' | 'justify';
    collection?: boolean;
    collapse?: boolean;
    expandAll?: boolean;
    eidtable?: boolean;
    size?: 'lg' | 'sm';
    data: any;
    columns?: any;
    propsData?: any;
    tableHover?: boolean;
    tableStriped?: boolean;
    tableBorderd?: boolean;
    tableBorderless?: boolean;
    headColor?: 'light' | 'dark';
    captionContent?: any;
    captionPosition?: 'top' | 'bottom';
    tableResponsive?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    children?: any;
    headSticky?: boolean;
    headTextColor?: string;
    headBGC?: any;
    divider?: boolean;
    maxHeight?: string;
    minHeight?: string;
    onRowDoubleClick?: (row: any) => void;
    onRowClick?: (row: any) => void;
}

const Table = (props: TableProps) => {
    const {
        checkAll,
        tdPadding = 'px-2 py-3',
        clickChecked,
        showHeader = true,
        defaultCheckedList,
        headerFontWeight = 'normal',
        tableWidth, // 控制 table的宽度，太宽的话 可以形成滚动条
        tableBGC,
        tableRef,
        activeId,
        maxWidth,
        showIndex = false,
        multiple = false,
        id = 'id',
        trPointer = false,
        align,
        collection,
        collapse,
        expandAll = false,
        size = 'lg',
        data,
        columns,
        propsData,
        tableHover = true,
        tableStriped = false,
        tableBorderd = false,
        tableBorderless = false,
        headColor = 'null',
        captionContent,
        captionPosition = 'top',
        tableResponsive = 'xxl',
        eidtable = false,
        headSticky = true,
        headTextColor = 'black',
        headBGC = '',
        divider,
        maxHeight = '500px',
        minHeight = '0px',
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
            case 'start':
                return 'flex-start';

            case 'end':
                return 'flex-end';

            default:
                return 'center';
        }
    };

    const judgeSortIconBGC = (prop: string, isDown?: boolean) => {
        const findItem = tableHeaders?.find((item: any) => item.prop === prop);
        if (!findItem) return;
        if (isDown) {
            if (findItem.isDown) {
                return '7px solid red';
            }
        } else {
            if (findItem.isUp) {
                return '7px solid red';
            }
        }
    };

    // 判断每一列的 对齐方式
    const judgeTdAlign = (data: any) => {
        console.log('data: ', data);
        switch (data.align) {
            case 'start':
                return 'justify-content-start';

            case 'end':
                return 'justify-content-end';
            default:
                return 'justify-content-center';
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
                                        const childrenCopy = item.children ? JSON.parse(JSON.stringify(item.children)) : [];
                                        if (childrenCopy.length > 0) {
                                            // 对拷贝后的childrenCopy进行排序
                                            childrenCopy.sort((a: any, b: any) => (a[prop] < b[prop] ? 1 : -1));
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
                                        const childrenCopy = item.children ? JSON.parse(JSON.stringify(item.children)) : [];
                                        if (childrenCopy.length > 0) {
                                            // 对拷贝后的childrenCopy进行排序
                                            childrenCopy.sort((a: any, b: any) => (a[prop] > b[prop] ? 1 : -1));
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

    const renderChildren = (array: any, data: any, rowIndex: number, verticalAlignObject: any, widthObject: any, textPositionObject: any, level: number = 0) => {
        level++;
        return (
            data.collapse &&
            data.children &&
            data.children.map((childData: any, index: number) => (
                <Fragment key={childData[id]}>
                    <tr
                        onClick={(e: any) => handleRowClick(childData, e)}
                        className={`tr-content tr-content ${childData.checked === true ? 'tr-checked' : ''} collapse-table-tr animate__animated animate__fadeIn`}
                        style={{
                            ...(clickChecked || trPointer ? { cursor: 'pointer' } : ''),
                            ...(!tableBorderd ? { borderBottom: '1px solid #f0f0f0' } : {}),
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
                                    minWidth: '50px',
                                    width: '50px',
                                    maxWidth: '50px',
                                    verticalAlign: 'middle',
                                }}
                                className={`text-center ${tdPadding}`}
                            >
                                <input
                                    className={tdPadding}
                                    name={childData[id] + uniqId} // 加上 uniqId 防止多个表格的相同复选框冲突
                                    id={childData[id] + uniqId}
                                    checked={childData.checked === true}
                                    onChange={(e: any) => handleCheckboxChange(childData, e)}
                                    type={!multiple ? 'radio' : 'checkbox'}
                                />
                            </td>
                        )}
                        {/* 索引框 */}
                        {showIndex && (
                            <th
                                className={`text-center ${tdPadding}`}
                                style={{
                                    minWidth: '50px',
                                    width: '50px',
                                    maxWidth: '50px',
                                    padding: '0px',
                                    alignContent: 'center',
                                    fontWeight: headerFontWeight,
                                }}
                            >
                                {`${rowIndex + 1}.${index + 1}`}
                            </th>
                        )}
                        {React.Children.map(array, (child, colIndex) => {
                            let childProps = (child as React.ReactElement).props;
                            let prop = (child as React.ReactElement).props.prop;
                            if (React.isValidElement(child)) {
                                const enhancedChild = React.cloneElement(child, {
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
                                    align: childProps.align || align,
                                } as React.Attributes);
                                return (
                                    <td
                                        // 这边也不用在子级的第一列在最左侧了
                                        // colIndex === 0 ? 'text-start' :
                                        className={`text-${childProps.align} ${tdPadding}`}
                                        style={{
                                            verticalAlign: verticalAlignObject[prop],
                                            width: widthObject[(child as React.ReactElement).props.prop],
                                            overflowWrap: 'break-word',
                                            wordWrap: 'break-word',
                                            wordBreak: 'break-word',
                                            [`${!colIndex ? 'paddingLeft' : ''}`]: '40px',
                                        }}
                                        key={colIndex}
                                    >
                                        <div className={`collapse-table-td d-flex ${judgeTdAlign(childProps)}`} style={{ paddingLeft: !colIndex ? level * 15 + 'px' : 0 }}>
                                            {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                                            {(child as ReactElement).props.tooltip ? (
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
                        })}
                    </tr>
                    {/* {childData.children?.lentg > 0 ? '有孩子' : null} */}
                    {childData.children?.length > 0 ? renderChildren(array, childData, rowIndex, verticalAlignObject, widthObject, textPositionObject, level) : null}
                </Fragment>
            ))
        );
    };

    // 渲染折叠的子组件
    const renderTableBody = () => {
        let array: any = [];
        if (!props.children?.length) {
            array.push(props.children);
        } else {
            array = props.children;
        }

        let widthObject: any = {};
        const textPositionObject: any = {}; // 优先使用 每一列的 align，table 的 align 次之，都没的话默认居中
        const verticalAlignObject: any = {};
        array.forEach((item: any) => {
            if (item?.props) {
                widthObject[item.props.prop] = item.props.width;
                // 优先使用 每一列的 align，table 的 align 次之，都没的话默认居中(align默认等于 center)
                textPositionObject[item.props.prop] = item.props.align || align;
                verticalAlignObject[item.props.prop] = item.props.verticalAlign || 'middle';
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
                            position: headSticky ? 'sticky' : 'unset',
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
                                            minWidth: '50px',
                                            width: '50px',
                                            maxWidth: '50px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {multiple && <input checked={checkedAll} onChange={handleCheckedAllChange} type={!multiple ? 'radio' : 'checkbox'} />}
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
                                            minWidth: '50px',
                                            width: '50px',
                                            maxWidth: '50px',
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
                                                    whiteSpace: 'nowrap',
                                                    width: widthObject[(child as React.ReactElement).props.prop],
                                                    fontWeight: headerFontWeight,
                                                }}
                                                className={`text-${textPositionObject[child.props.prop]}`}
                                                scope="col"
                                                key={child.props.label}
                                            >
                                                <div
                                                    className="header-content"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: generateHeaderStyle(textPositionObject[child.props.prop]),
                                                    }}
                                                >
                                                    {/* header-text 去掉 me-2 属性 */}
                                                    <span className="header-text">{child.props.label}</span>
                                                    {child.props.sortable && (
                                                        <div className="header-icon">
                                                            <i
                                                                style={{
                                                                    borderBottom: judgeSortIconBGC(child.props.prop) || '7px solid #000',
                                                                }}
                                                                onClick={() => handleSortable(child.props.prop)}
                                                                className="icon sort-up"
                                                            ></i>
                                                            <i
                                                                style={{
                                                                    borderTop: judgeSortIconBGC(child.props.prop, true) || '7px solid #000',
                                                                }}
                                                                onClick={() => handleSortable(child.props.prop, true)}
                                                                className="icon sort-down"
                                                            ></i>
                                                        </div>
                                                    )}
                                                </div>
                                            </th>
                                        );
                                    }
                                })}
                        </tr>
                    </thead>
                )}
                {/* --------------------------渲染表格内容 */}
                <tbody className={`${divider ? 'table-group-divider' : ''}`}>
                    {tableData.length > 0 &&
                        tableData.map((data: any, rowIndex: number) => {
                            return (
                                // 加上 uniqId 防止多个表格的相同复选框冲突
                                <Fragment key={data[id] + uniqId}>
                                    <tr
                                        onClick={(e: any) => handleRowClick(data, e)}
                                        // onDoubleClick={() => handleRowDoubleClick(data)}
                                        key={rowIndex}
                                        className={`tr-content ${data.checked === true ? 'tr-checked' : ''}`}
                                        style={{
                                            ...(clickChecked || trPointer ? { cursor: 'pointer' } : ''),
                                            ...(!tableBorderd ? { borderBottom: '1px solid #f0f0f0' } : {}),
                                        }}
                                    >
                                        {collection && (
                                            // 复选框
                                            <td
                                                scope="row"
                                                style={{
                                                    minWidth: '50px',
                                                    width: '50px',
                                                    maxWidth: '50px',
                                                    verticalAlign: 'middle',
                                                }}
                                                className={`text-center ${tdPadding}`}
                                            >
                                                <input
                                                    className={tdPadding}
                                                    name={data[id] + uniqId} // 加上 uniqId 防止多个表格的相同复选框冲突
                                                    id={data[id] + uniqId}
                                                    checked={data.checked === true}
                                                    onChange={(e) => handleCheckboxChange(data, e)}
                                                    type={!multiple ? 'radio' : 'checkbox'}
                                                />
                                            </td>
                                        )}
                                        {showIndex && (
                                            // 索引框
                                            <td
                                                className={`text-center ${tdPadding}`}
                                                scope="col"
                                                style={{
                                                    alignContent: 'center',
                                                    padding: '0px',
                                                    minWidth: '50px',
                                                    width: '50px',
                                                    maxWidth: '50px',
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
                                                    align: childProps.align || align,
                                                    width: widthObject[childProps.prop],
                                                    // maxWidth: childProps.maxWidth,
                                                } as React.Attributes);
                                                return (
                                                    <td
                                                        // 父级第一列不需要在 最左侧了
                                                        // !colIndex && collapse && data.children ? 'text-start' : `text-${textPositionObject[prop]}`
                                                        className={`text-${childProps.align} ${tdPadding} 111`}
                                                        style={{
                                                            verticalAlign: verticalAlignObject[prop],
                                                            width: widthObject[childProps.prop],
                                                            // maxWidth: maxWidth || childProps.maxWidth,
                                                            overflowWrap: 'break-word',
                                                            wordWrap: 'break-word',
                                                            wordBreak: 'break-word',
                                                            // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
                                                            // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
                                                            whiteSpace: 'nowrap',
                                                            /*  [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px', */
                                                        }}
                                                        key={colIndex}
                                                    >
                                                        {/* 整个子组件展示的位置 */}
                                                        <div className={`collapse-table-td d-flex ${judgeTdAlign(childProps)}`}>
                                                            {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                                                            {childProps.tooltip ? <Tooltip text={data[prop]}>{enhancedChild}</Tooltip> : enhancedChild}
                                                        </div>
                                                    </td>
                                                );
                                            }
                                        })}
                                    </tr>
                                    {/* ***************************************展开行********************************** */}
                                    {renderChildren(array, data, rowIndex, verticalAlignObject, widthObject, textPositionObject)}
                                </Fragment>
                            );
                        })}
                </tbody>
            </>
        );
    };

    const calculateHeaderWidth = (columns: any[]) => {
        const labelLengthObj: any = {};
        const newHeaderLabels = columns.map((item: any) => {
            return {
                label: item.props.label,
                prop: item.props.prop,
            };
        });

        const totalLabelLength = newHeaderLabels.reduce((acc, curr) => acc + curr.label.length, 0);

        newHeaderLabels.forEach((item: any) => {
            labelLengthObj[item.prop] = Number((item.label?.length / totalLabelLength).toFixed(2)) * 100 + '%';
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

    const recursiveUpdateParentChecked = (child, parentData, id) => {
        const parent = parentData.find((item) => {
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
            const allChildrenChecked = parent.children.every((child) => child.checked === true);
            const someChildrenChecked = parent.children.some((child) => child.checked === true);
            if (allChildrenChecked) {
                parent.checked = true;
            } else if (someChildrenChecked) {
                parent.checked = 'partial'; // 表示部分选中，你可以根据需求自定义状态
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
            const isCheckboxClick = e.target.type === 'checkbox' || e.target.type === 'radio';
            if (!isCheckboxClick) {
                handleCheckboxChange(row, e);
            }
        }
    };

    // 递归选中 默认选中的节点，子节点也要
    const recursiveCheckDefaultTableData = (data: any[], defaultCheckedList: any[]) => {
        return data.map((item: any) => {
            if (defaultCheckedList.includes(item[id])) {
                item.checked = true;
                if (item.children) {
                    // 父节点被选中，如果它有子节点，则递归选中子节点
                    directlyUpdateChildrenCheckState(item.children, true);
                }
            }
            if (item.children?.length) {
                item.children = recursiveCheckDefaultTableData(item.children, defaultCheckedList);
            }
            return item;
        });
    };

    // 新增 默认选中 / 全选
    const handleDefaultChecked = (tempData?: any) => {
        if (checkAll) {
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
        } else if (Array.isArray(defaultCheckedList) && defaultCheckedList.length > 0) {
            // 如果传入的是数组，则去 递归选中这些节点，子节点也要
            const newTableData = recursiveCheckDefaultTableData(JSON.parse(JSON.stringify(tempData)), defaultCheckedList);
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
                        item.children = directlyUpdateChildrenCheckState(item.children, item.checked === true ? true : false);
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
                        item.children = recursiveUpdateOtherTableDataCheck(item.children, row);
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
        return recursiveGetCheckedList(JSON.parse(JSON.stringify(tableData)), checkedList);
    };

    const handleExpandAll = () => {
        const data = recursiveExpandTable(JSON.parse(JSON.stringify(tableData)), true);
        setTableData(data);
    };

    const handleFoldAll = () => {
        const data = recursiveExpandTable(JSON.parse(JSON.stringify(tableData)), false);
        setTableData(data);
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
    const recursiveExpandTable = (tempData: any[], state: boolean = expandAll) => {
        return tempData.map((item: any) => {
            item.collapse = state;
            if (item.children) {
                recursiveExpandTable(item.children);
            }
            return item;
        });
    };

    useEffect(() => {
        // 这个 useEffect 这边操作 tableData的地方 都要用同一个数据 tempData，不然数据会不对
        if (!data.length) return;
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
    }));

    return (
        <>
            <div
                style={{
                    minHeight: minHeight,
                    maxHeight: maxHeight,
                    overflow: 'auto',
                    width: tableWidth,
                }}
                className={`table-wrapper ${`table-responsive${'-' + tableResponsive}`}`}
            >
                <table
                    style={{ background: tableBGC, width: tableWidth }}
                    className={`table ${tableStriped ? 'table-striped' : ''} ${tableBorderd ? 'table-bordered' : 'table-borderless'} table-${size} ${
                        headColor ? `table-${headColor}` : ''
                    } overflow-auto ${data.length === 0 ? 'mb-0' : ''}`}
                >
                    {renderTableBody()}
                </table>
                {data.length === 0 && <div className="text-center p-1">暂无数据~</div>}
            </div>
        </>
    );
};

Table.TableCell = TableCell;

export default Table;
