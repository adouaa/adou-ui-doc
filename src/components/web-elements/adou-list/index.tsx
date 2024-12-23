// List组件
import React, {
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import ListNode from "./ListNode";

export type NodeType = {
  id: string;
  name: string;
  isExpanded: boolean;
  children: NodeType[];
};

interface ListProps {
  defaltExpandNodes?: any[];
  showLine?: boolean;
  maxLevel?: number;
  lazy?: boolean;
  overflowY?: boolean;
  data?: any[];
  activeBgc?: any;
  deleteIconClass?: string;
  addIconClass?: string;
  editIconClass?: string;
  isTree?: boolean;
  maxWidth?: any;
  maxHeight?: any;
  showOptIcons?: boolean;
  showAddIcon?: boolean;
  showEditIcon?: boolean;
  activeId?: string | number;
  wrap?: boolean;
  children?: any;
  showTag?: boolean;
  showSearch?: boolean;
  prefixTag?: string;
  onToggle?: (node: any) => void;
  onItemClick?: (node: any) => void;
  onToggleIconClick?: (node: any) => void;
  onOptIconClick?: (type: string, node: any) => void;
  onLoadNode?: (node: any, treeData: any) => void;
}

const List = forwardRef(
  (
    {
      defaltExpandNodes,
      showLine,
      maxLevel,
      lazy,
      overflowY = true,
      activeBgc,
      deleteIconClass,
      addIconClass,
      editIconClass,
      prefixTag,
      showSearch = false,
      showTag = true,
      children,
      wrap = true,
      data,
      isTree = false,
      showOptIcons = false,
      showAddIcon = true,
      showEditIcon = true,
      activeId,
      maxWidth = 300,
      maxHeight = "100%",
      onToggle,
      onItemClick,
      onToggleIconClick,
      onOptIconClick,
      onLoadNode,
    }: ListProps,
    ref
  ) => {
    const [_activeId, set_ActiveId] = useState(activeId);
    const [treeData, setTreeData] = useState<any[]>([]);

    const handleItemClick = (node: any) => {
      set_ActiveId(node.id);
      onItemClick && onItemClick(node);
    };

    const handleToggleIconClick = (node: any) => {
      onToggleIconClick && onToggleIconClick(node);
    };

    const handleOptIconClick = (type: string, node: any) => {
      onOptIconClick && onOptIconClick(type, node);
    };

    const handleInputChange = (value: string) => {};

    const handleInputIconClick = (value: string) => {};

    /**
     * 自动滚动到底部的逻辑
     */
    const listRef = useRef<any>(null);
    const scrollToEnd = () => {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTo({
            top: listRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 10);
    };
    const scrollToTop = () => {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 0);
    };

    function markLastChildrenAndFirstItem(items: any[]) {
      let lastItemIndex = -1;

      items.forEach((item, index) => {
        if (item.children && item.children.length > 0) {
          // 递归处理子节点
          item.children = markLastChildrenAndFirstItem(item.children);

          // 获取子节点中的最后一项并设置isLast为true
          const lastChild = item.children[item.children.length - 1];
          if (lastChild) {
            lastChild.isEachLast = true;
          }
        }

        // 判断当前项是否为这一层级的最后一项
        if (index === items.length - 1) {
          item.isEachLast = true;
          lastItemIndex = index;
        } else {
          item.isEachLast = false;
        }

        // 判断是否为数组的第一条数据，若是则添加first属性并设置为true
        if (index === 0) {
        }
      });

      // 如果这一层级没有子节点且之前有过节点（通过lastItemIndex判断），则将最后一个节点的isLast设为true
      if (items.length === 0 && lastItemIndex >= 0) {
        items[lastItemIndex].isEachLast = true;
      }

      return items;
    }

    const convertListToTree = (list: any[], pid: any) => {
      let level = 0;
      // 递归辅助函数，用于处理每个节点及其子节点
      const buildTree = (items: any[], parentId: any, currentLevel: any) => {
        const children: any = [];
        items.forEach((item: any) => {
          if (item.pid === parentId) {
            item.level = currentLevel;
            if (item.level === 0) {
              // 由于 overflow 的原因，所以通过让 都是第一层的节点带上 isFirst，使得左边框线的 left 为0
              item.isFirst = true;
            }
            children.push(item);
            // 递归调用自身处理子节点，层级加1
            item.children = buildTree(list, item.id, currentLevel + 1);
          }
        });
        return children;
      };

      const data: any[] = buildTree(list, pid, level);

      return data;
    };

    function flattenDataWithoutNesting(data: any[]) {
      let flattened: any = [];
      function flattenRecursive(node: any, parentId: any) {
        const { id, name, isExpanded } = node;

        flattened.push({
          ...node,
          id,
          name,
          isExpanded,
          pid: parentId,
        });

        if (node.children && node.children.length > 0) {
          node.children.forEach((child: any) => {
            flattenRecursive(child, id);
          });
        }
      }

      data.forEach((rootNode: any) => {
        flattenRecursive(rootNode, null);
      });

      return flattened.map((item: any, index: 0) => {
        // 由于 overflow 的原因，所以通过让 都是第一层的节点带上 isFirst，使得左边框线的 left 为0
        if (index === 0) {
          return {
            ...item,
            isFirst: true,
          };
        }
        return item;
      });
    }

    const handleLoadNode = async (node: any) => {
      if (onLoadNode) {
        const res = await onLoadNode(node, treeData);
        return res;
      }
    };

    useImperativeHandle(ref, () => ({
      scrollToEnd,
      scrollToTop,
      flattenDataWithoutNesting,
      convertListToTree,
    }));

    useEffect(() => {
      set_ActiveId(activeId);
    }, [activeId]);

    useEffect(() => {
      setTreeData(
        markLastChildrenAndFirstItem(
          convertListToTree(
            flattenDataWithoutNesting(data!),
            data?.[0]?.pid || null
          )
        )
      );
      // data 变化的时候，也要将 选中的id 置为 -1，防止遗留上一次 选中的id
      if (!activeId) {
        set_ActiveId(-1);
      }
    }, [data]);

    useEffect(() => {}, [treeData]);

    return (
      <div
        className={`list-wrapper ${showLine ? `ps-2` : ""}`}
        style={{ flex: 1, height: "100%" }}
      >
        <div
          ref={listRef}
          className="list-content"
          style={{
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            overflowY: "auto",
          }}
        >
          {treeData &&
            treeData.map((item: any) => (
              <ListNode
                defaltExpandNodes={defaltExpandNodes}
                showLine={showLine}
                maxLevel={maxLevel}
                onLoadNode={handleLoadNode}
                lazy={lazy}
                activeBgc={activeBgc}
                addIconClass={addIconClass}
                deleteIconClass={deleteIconClass}
                editIconClass={editIconClass}
                prefixTag={prefixTag}
                showTag={showTag}
                wrap={wrap}
                showEditIcon={showEditIcon}
                showAddIcon={showAddIcon}
                activeId={_activeId}
                showOptIcons={showOptIcons}
                onOptIconClick={(type: any, node: any) =>
                  handleOptIconClick(type, node)
                }
                onToggleIconClick={handleToggleIconClick}
                onItemClick={handleItemClick}
                key={item.id}
                node={item}
                isTree={isTree}
                onToggle={onToggle}
              >
                {children}
              </ListNode>
            ))}
        </div>
      </div>
    );
  }
);

export default List;
