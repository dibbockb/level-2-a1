//problem 1
const filterEvenNumbers = (numArr: number[]) => {
    const filteredArr = numArr.filter((x) => {
        return x % 2 === 0
    })
    return filteredArr;
}


//problem 2
const reverseString = (param: string) => {
    const arrayedString = param.split('');
    const reversedArr = arrayedString.reverse();
    const joinedArr = reversedArr.join('')
    return joinedArr;
}


//problem 3
type StringOrNumber = string | number;

const checkType = (param: StringOrNumber) => {
    if (typeof (param) === 'string') {
        return "String"
    }
    else {
        return "Number"
    }
}


//problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key]
}




