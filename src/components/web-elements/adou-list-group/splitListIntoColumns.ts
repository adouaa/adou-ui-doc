// 根据列数和每列展示的文件数量来分割文件
const splitListIntoColumns = (list: string[], listPerColumn: number) => {
    const result: string[][] = [];
    let currentColumn: string[] = [];

    list.forEach((file, index) => {
        currentColumn.push(file);
        if ((index + 1) % listPerColumn === 0 || index === list.length - 1) {
            result.push(currentColumn);
            currentColumn = [];
        }
    });

    return result;
};

export default splitListIntoColumns;