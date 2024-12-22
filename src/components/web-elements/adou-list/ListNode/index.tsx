import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

interface ListNodeProps {
  defaltExpandNodes?: any[];
  showLine?: boolean;
  maxLevel?: number;
  onLoadNode?: any;
  lazy?: boolean;
  activeFontColor?: string;
  bgc?: string;
  children?: any;
  activeBgc?: any;
  deleteIconClass?: string;
  addIconClass?: string;
  editIconClass?: string;
  node: any;
  isTree: boolean;
  showOptIcons?: boolean;
  showAddIcon?: boolean;
  showEditIcon?: boolean;
  activeId?: string | number;
  wrap?: boolean;
  isTreeChildren?: boolean;
  isExpanded?: boolean;
  showTag?: boolean;
  prefixTag?: string;
  onToggle?: (node: any) => void;
  onItemClick?: (node: any) => void;
  onToggleIconClick?: (node: any) => void;
  onOptIconClick?: (type: string, node: any) => void;
}

const ListNode = ({
  defaltExpandNodes,
  showLine,
  maxLevel,
  onLoadNode,
  lazy = false,
  activeFontColor = "#fff",
  activeBgc = "#2783d8",
  bgc = "transparent",
  addIconClass,
  deleteIconClass,
  editIconClass,
  prefixTag,
  showTag = true,
  children,
  wrap = true,
  node: data,
  isTree,
  showOptIcons = true,
  showAddIcon = true,
  showEditIcon = true,
  activeId,
  onToggle,
  onToggleIconClick,
  onItemClick,
  onOptIconClick,
}: ListNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowIcons, setIsShowIcons] = useState(false);
  const [node, setNode] = useState<any>(data);

  // 计算children的maxWidth
  const [childrenMaxHeight, setChildrenMaxHeight] = useState<any>(0);
  const toggledNodeItemRef = useRef<any>(null);
  const toggleIconRef = useRef<any>(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    onToggle && onToggle(node);
    /* setTimeout(() => {
  onToggleIconClick && onToggleIconClick(node);
}); */
  };

  const handleMouseLeaveRightContent = () => {
    setIsShowIcons(false);
  };

  const handleMouseEnterRightContent = () => {
    setIsShowIcons(true);
  };

  const handleNodeNameClick = (e: any, node: any) => {
    onItemClick && onItemClick(node);
  };

  const setMaxHeights = (
    element: any,
    expandedParents: any[],
    closed: boolean = false
  ) => {
    let currentMaxHeight: any;

    // scrollHeight 可以用来确定元素内容的总高度，包括隐藏的溢出内容。
    currentMaxHeight = element.scrollHeight;
    // 遍历所有找到的父 div 元素
    expandedParents.forEach((parent: any, index: number) => {
      // 将当前父 div 元素的 maxHeight 设置为当前值加上上一个父 div 元素的 maxHeight

      if (index) {
        // 后面遍历到的expanded元素 因为要加上前边遍历到的expanded元素，所以要加上它的 maxHeight
        // 如此往复就会正确计算好展开的maxHeight。。。
        const parenetMaxHeight = parseInt(parent.style.maxHeight);
        parent.style.maxHeight = `${currentMaxHeight + parenetMaxHeight}px`;
      } else {
        // 如果是第一个遍历到的expanded元素的话，只要赋上本身的 scrollHeight即可
        // 后面遍历到的expanded元素 因为要加上前边遍历到的expanded元素，所以要加上它的 maxHeight
        // 如此往复就会正确计算好展开的maxHeight。。。
        parent.style.maxHeight = `${currentMaxHeight}px`;
      }
      // 更新 currentMaxHeight 为当前父 div 元素的实际高度
      // ----错了，不能累加，每次用最开始的计算就行。。因为后面遍历到的 expanded元素会加上它本身的 maxHeight
      // 这个 maxHeight就会正确的包括前面的 expanded元素的高度。
    });
  };

  function findExpandedParents(element: any) {
    // 存放所有expanded元素的数组
    let expandedParents: any = [];
    // 存放当前元素
    let currentElement = element;

    // 循环遍历每个父节点
    while (currentElement) {
      // 检查当前元素是否是 div 并且包含 'expanded' 类
      if (
        currentElement.tagName === "DIV" &&
        currentElement.classList.contains("expanded")
      ) {
        expandedParents.push(currentElement);
      }
      // 移动到当前元素的父节点--类似递归的操作
      currentElement = currentElement.parentNode;
    }

    setMaxHeights(element, expandedParents);
  }

  /* const updateNodeLoadInfo = (node: any) => {
if (!node.hasLoaded) {
  setNode({ ...node, loading: true });
}
}; */

  const generateCalcDom = (selector?: string) => {
    const notExpandedChildren = toggledNodeItemRef.current?.querySelector(
      `.children.${selector || "not-expand"}`
    );
    // console.log("notExpandedChildren: ", notExpandedChildren);
    // childrenList: 类名为 children下的所有div节点
    const childrenList =
      notExpandedChildren?.querySelectorAll(".list-node-wrapper");
    if (childrenList) {
      // 伪数组无法遍历，造成新数组来处理
      const childrenArr = [...childrenList];
      // 存放是expanded节点的子元素
      const expandedChildrenList: any = [];

      // 因为isExpanded状态的设置是异步的，所以这边要加个定时器，不然不行
      setTimeout(() => {
        childrenArr.forEach((child: any) => {
          // 找到list-node-wrapper的父节点
          const parent = child.parentNode;
          // 通过判断list-node-wrapper的父节点是否是 expanded，来决定要不要存入数组
          if (parent?.classList.contains("expanded")) {
            expandedChildrenList.push(child);
          }
        });

        // 存放父节点
        let childrenContainerDiv: any;
        expandedChildrenList?.forEach((child: any) => {
          // 相同的节点只处理一次
          if (childrenContainerDiv != child.parentNode) {
            // 存放父节点
            childrenContainerDiv = child.parentNode;
            // 判断这个父节点是否是展开状态--貌似有点多余，不用判断，直接执行函数即可
            findExpandedParents(childrenContainerDiv);
          }
        });
      }, 0);
    }
  };
  const handleLoadNode = async (clickNode: any) => {
    // 先基于点击的clickNode创建一个新的节点对象副本，用于后续更新操作
    let updatedNode = { ...clickNode };

    // 设置加载状态为true，表示正在加载子节点数据
    updatedNode.loading = true;
    setNode(updatedNode); // 先更新数据是为了展示 loading效果

    // 调用父组件传递的onLoadNode函数来获取子节点数据

    // 使用更新后的节点对象来更新组件的node状态
    const parentLoadNodeRes = await onLoadNode(clickNode);

    // 如果获取到了子节点数据，更新节点的相关属性
    if (parentLoadNodeRes) {
      updatedNode.children = parentLoadNodeRes.map(
        (item: any, index: number) => {
          let nodeInfo = {
            ...item,
            level: clickNode.level + 1,
            isExpanded: false,
          };
          if (index === parentLoadNodeRes.length - 1) {
            nodeInfo.isEachLast = true;
          }
          return nodeInfo;
        }
      );

      // 设置加载状态为false，表示子节点数据加载完成
      updatedNode.loading = false;

      // 设置hasLoaded为true，表示已经成功加载过数据
      updatedNode.hasLoaded = true;
    }
    // 不知道为什么这里不能加定时器，会出问题。。。并且在父组件的 onLoadNode回调里面也不能使用定时器，不会等定时器结束再执行这里，也不会拿到定时器返回的数据【可能可以使用 Promise来？？】
    setNode(updatedNode);
  };

  const handleToggleIconClick = async (node: any, e?: any) => {
    // 公共操作
    let target: any;
    if (e) {
      e.stopPropagation();
      target = e.target;
    } else {
      target = toggleIconRef.current;
    }
    handleToggle();
    // 如果是懒加载，并且还没加载过 子节点 的数据，则 加载子节点数据
    if (isTree && (lazy || onLoadNode) && !node.hasLoaded) {
      await handleLoadNode(node);
    }

    // 因为点击的是 折叠icon，所以要去 父元素 (left-content) 的 父元素(node-item-list)
    const nodeItem = target?.parentNode?.parentNode;
    toggledNodeItemRef.current = nodeItem;
    // console.log("nodeItem: ", nodeItem);
    /* if (lazy) {
  updateNodeLoadInfo(node);
} */

    // 1. 如果未展开，设置高度为 nodeItem 的 scrollHeight，这样子节点才能显示出来。
    if (!isExpanded) {
      // 如果是展开，这个操作也是不能少的--具体原因未知。。。
      setChildrenMaxHeight(nodeItem?.scrollHeight);
    } else {
      // 如果是折叠，直接maxHeight设置为0即可。虽热子节点的maxHeight不会为，但是父节点的maxHeight为0，就隐藏子节点了
      setChildrenMaxHeight(0);
    }
    generateCalcDom();

    // 一开始还没点击展开的时候，都是 not-expanded
    // （如果数据是 异步 请求回来的话，可能会出问题：数据还没回来，但是 js已经取完 dom了，导致高度计算失败）
  };

  const handleChildrenIconClick = (node: any) => {
    onToggleIconClick && onToggleIconClick(node);
  };

  const handleOptIconClick = (e: any, type: string, node: any) => {
    e.stopPropagation(); // 阻止事件冒泡
    onOptIconClick && onOptIconClick(type, node);
  };

  const handleChildrenOptIconClick = (type: string, node: any) => {
    onOptIconClick && onOptIconClick(type, node);
  };

  const renderTag = () => {
    const childArr = children?.length > 0 ? children : [children];

    return childArr.map((item: any) => {
      if (item?.props?.id === node.showTag) {
        return item;
      }
    });
  };

  // 鼠标进入折叠icon
  const handleMouseEnterExpandIcon = () => {
    setNode((preData: any) => ({
      ...preData,
      isEnter: true,
    }));
  };

  // 鼠标离开折叠icon
  const handleMouseLeaveExpandIcon = () => {
    setNode((preData: any) => ({
      ...preData,
      isEnter: false,
    }));
  };

  useEffect(() => {
    if (defaltExpandNodes?.includes(data.id)) {
      // 因为子节点展开与否会影响父节点的样式，所以需要延迟执行，等子节点的样式计算完成后，再执行父节点的样式计算，但是为什么是 level === 1的呢？
      if (data.level === 1) {
        setTimeout(() => {
          handleToggleIconClick(node);
        }, 100);
      } else {
        handleToggleIconClick(node);
      }
    }
    setNode(data); // 更新 node信息
  }, [data]);

  useEffect(() => {
    if (!node.loading && node.hasLoaded) {
      generateCalcDom("expanded");
    }
  }, [node.loading, node.hasLoaded]);

  return (
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}}
    // 整个树
    <div className="list-node-wrapper">
      {/* 每个树节点 */}
      <div
        className={`node-item-list  ${showLine ? "show-line" : ""} ${
          node.isEachLast ? "each-last" : ""
        } ${node.isFirst ? "first" : ""}`}
      >
        {/* handleNodeNameClick: 整个树节点的点击事件 */}
        <div
          onMouseEnter={handleMouseEnterRightContent}
          onMouseLeave={handleMouseLeaveRightContent}
          style={{
            backgroundColor: node.bgc,

            ...(!showLine && { paddingLeft: node.level * 26 + "px" }), // 让树节点的层级有缩进，并且是充满一整行的样式
          }}
          className={`node-item-content pe-1 ${!node.level ? "ps-2" : ""}`}
        >
          {/* <span className="none d-none">{String(node.loading)}</span> */}
          {/* 有子节点的话，展示折叠按钮 */}
          {isTree &&
            ((!node.hasLoaded && lazy) ||
              (node.children && node.children.length > 0)) &&
            node.level !== maxLevel! - 1 && (
              <i
                ref={toggleIconRef}
                onMouseEnter={handleMouseEnterExpandIcon}
                onMouseLeave={handleMouseLeaveExpandIcon}
                style={{
                  fontSize: "16px",
                  width: "10px",
                  ...(node.isEnter
                    ? { transform: "scale(1.4)", color: "#334155" }
                    : ""),
                }}
                onClick={(e) => handleToggleIconClick(node, e)}
                className={`toggle-icon fa fa-caret-${
                  isExpanded ? "down" : "right"
                }`}
              ></i>
            )}
          {node.loading && (
            <div
              style={{ width: "18px", height: "18px" }}
              className="spinner-border mx-1 ms-2"
              role="status"
            >
              <span className="visually-hidden ">Loading...</span>
            </div>
          )}
          {/* 最左边的tag */}
          {prefixTag && (
            <div className={`prefix-tag ms-2`}>
              <i
                className={`${prefixTag} ${
                  activeId === node.id ? "text-white" : ""
                }`}
              ></i>
            </div>
          )}
          {/* 展示标志 */}
          {showTag && renderTag()}
          {/* 节点名字 */}
          <div
            style={{
              whiteSpace: `${wrap ? "normal" : "nowrap"}`,
              ...(String(activeId) === String(node.id)
                ? { backgroundColor: activeBgc, color: activeFontColor }
                : ""), // id 要用 String 来修饰，用 Number 会出现问题
            }}
            onClick={(e) => handleNodeNameClick(e, node)}
            className={`ms-1 py-1 item-name ${
              node.children && node.children.length > 0
                ? "has-children"
                : "no-children"
            } ${String(activeId) === String(node.id) ? "active" : ""}`}
          >
            {node.name}
          </div>
          <div
            className="right-content"
            style={{
              display: showOptIcons && isShowIcons ? "block" : "none",
            }}
          >
            <i
              style={{
                display: showAddIcon || addIconClass ? "inline-block" : "none",
              }}
              className={`icon fa ${addIconClass || "fa-plus text-success"}`}
              onClick={(e) => handleOptIconClick(e, "add", node)}
            ></i>
            <i
              style={{
                display:
                  showEditIcon || editIconClass ? "inline-block" : "none",
              }}
              className={`icon fa ${editIconClass || "fa-pencil text-warning"}`}
              onClick={(e) => handleOptIconClick(e, "edit", node)}
            ></i>
            <i
              className={`icon fa ${deleteIconClass || "fa-trash text-danger"}`}
              onClick={(e) => handleOptIconClick(e, "delete", node)}
            ></i>
          </div>
        </div>
        {node.children && node.children.length > 0 && (
          <div
            className={`children ${isExpanded ? "expanded" : "not-expand"}`}
            style={{
              maxHeight: childrenMaxHeight,
              paddingLeft: showLine ? "35px" : 0,
            }}
          >
            {node.children.map((child: any) => (
              // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
              // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
              // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
              // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍

              // 注意！！！如果传递的是回调的话，直接将 父组件List 传递给 子组件ListNode 的回调再次传递给子组件ListNode(children) 的props，这样子组件ListNode(children) 才能正确调用这个回调，包括调用回调时候数据是否正确、函数是否正确【eg：onLoadNode={onLoadNode}】

              <ListNode
                defaltExpandNodes={defaltExpandNodes}
                showLine={showLine}
                maxLevel={maxLevel}
                onLoadNode={onLoadNode}
                lazy={lazy}
                addIconClass={addIconClass}
                editIconClass={editIconClass}
                deleteIconClass={deleteIconClass}
                prefixTag={prefixTag}
                showTag={showTag}
                children={children}
                showAddIcon={showAddIcon}
                showEditIcon={showEditIcon}
                showOptIcons={showOptIcons}
                activeId={activeId}
                onOptIconClick={(type, child) =>
                  handleChildrenOptIconClick(type, child)
                }
                onToggleIconClick={handleChildrenIconClick}
                onItemClick={onItemClick}
                key={child.id}
                node={child}
                isTree={isTree}
                onToggle={onToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListNode;
