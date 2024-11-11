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

    return flattened;
}

export default flattenDataWithoutNesting;
