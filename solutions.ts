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


//problem 5
interface BookInterface {
    title: string,
    author: string,
    publishedYear: number,
}

const toggleReadStatus = (bookObj: BookInterface): BookInterface & { isRead: boolean } => {
    return {
        ...bookObj,
        isRead: true,
    };
};


//problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}