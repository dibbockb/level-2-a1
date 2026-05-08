### Title: The Danger of 'any' and the Safety of 'unknown'

### Introduction

In TypeScript, the any type is a "type safety hole" because it turns off the compiler's type protection.For unpredictable data, unknown is  superior, safer alternative.


```
let value: unknown = "anytypeofdata";

// value.toUpperCase(); // Error: TypeScript prevents this.

if (typeof value === "string") {
    console.log(value.toUpperCase()); //  it is safe.
```

### Type Narrowing

Type narrowing is a technique of using conditional checks  to prove to  what a variable's type actually is. It acts as a gate, making sure  that the code only runs when it is safe run.


## Conclusion

Using any is basically not using typescript at all which might lead to crash. Using unknown forces handle data validation, making entire code predictable and robust.