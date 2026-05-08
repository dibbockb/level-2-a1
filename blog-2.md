### Title: Building Reusable Logic with TypeScript Generics

#### Introduction
Generics allow us to create functions and components that work with multiple types while maintaining type safety. Instead of locking a function to one type , we use a placeholder. That becomes whatever type of data is passed later.

####  Reusability
Without Generics, if we want a function to return the first element of an array, we might use `any`. But `any` loses all type information. Generics solve this by taking the inpyt type.

#### Example
```
// <T> is a placeholder for the type
function getFirst <T> (array: T[]): T {
    return array[0];
}

const num = getFirst([10, 20]);    // num is a number
const str = getFirst(["A", "B"]);  //str is a string now
```

#### Conclusion

Generics prevent code duplication.Allows us to write a logic once and reuse it across entire application with type safety.