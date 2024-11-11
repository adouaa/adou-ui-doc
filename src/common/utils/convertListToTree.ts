const convertListToTree = (list: any[], pid: any) => {
    let level = 0;
    // 递归辅助函数，用于处理每个节点及其子节点
    const buildTree = (items: any[], parentId: any, currentLevel: any) => {
        const children: any = [];
        items.forEach((item: any) => {
            if (item.pid === parentId) {
                item.level = currentLevel;
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

export default convertListToTree;
