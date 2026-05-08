//problem 1
const filterEvenNumbers = (numArr: number[]) => {
    const filteredArr = numArr.filter((x) => {
        return x % 2 === 0
    })
    return filteredArr;
}


