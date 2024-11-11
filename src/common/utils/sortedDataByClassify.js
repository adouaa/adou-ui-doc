const sortedDataByClassify = (data) => {
  // 使用reduce进行分类，并按照item_type排序
  const sortedClassifiedData = data
    .reduce((acc, currentItem) => {
      const itemType = currentItem.item_type;

      // 查找是否已经存在相同item_type的数组，如果不存在则新建一个
      const foundIndex = acc.findIndex(
        (item) => item[0]?.item_type === itemType
      );
      if (foundIndex === -1) {
        acc.push([currentItem]);
      } else {
        acc[foundIndex].push(currentItem);
      }

      return acc;
    }, [])
    // 对结果数组按照item_type排序
    .sort((a, b) => {
      const itemTypeA = a[0]?.item_type;
      const itemTypeB = b[0]?.item_type;
      return itemTypeA.localeCompare(itemTypeB); // 使用localeCompare确保按照字母顺序排序
    });

  // 定义顺序
  const itemOrder = ["器械", "用物", "杂项"];

  // 按照顺序重新整理数据
  const mergedArray = itemOrder.reduce((acc, itemType) => {
    const foundArray = sortedClassifiedData.find(
      (arr) => arr[0].item_type === itemType
    );
    if (foundArray) {
      acc.push(...foundArray);
    }
    return acc;
  }, []);

  return mergedArray;
};

export default sortedDataByClassify;
