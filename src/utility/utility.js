
//funcs for lists
export const isSelectedItemInList = (selectedList, id) => selectedList.indexOf(id) !== -1;

export const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export const getComparator = (orderType, orderBy) => {
    return orderType === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export const sortArray = (array, comparator) => {

    const arrayByIndex = array.map((el, index) => [el, index]);

    arrayByIndex.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return arrayByIndex.map((el) => el[0]);
}
