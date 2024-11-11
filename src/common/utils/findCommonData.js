function findCommonData(arr1, arr2, compareFn) {
    let commonData = [];

    for (let item1 of arr1) {
        for (let item2 of arr2) {
            if (compareFn(item1.value, item2.value)) {
                commonData.push(item1.value);
                break; // 找到一个相同的就跳出内层循环
            }
        }
    }

    return commonData;
}

// 比较函数示例，可以根据具体需求自定义
function compareValues(value1, value2) {
    return value1 === value2;
}

// 示例
const arr1 = [{ id: 1, value: 'apple' }, { id: 2, value: 'banana' }, { id: 3, value: 'cherry' }];
const arr2 = [{ id: 4, value: 'banana' }, { id: 5, value: 'cherry' }, { id: 6, value: 'date' }];

export default findCommonData;