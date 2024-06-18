"use strict";
console.log('Welcome');
const getSum = (first, second) => {
    return `Your sum of two numbers are ${first + second}`;
};
const getDifference = (first, second) => {
    const difference = first - second;
    if (difference < 0)
        return `Result is below 0`;
    return `Your sum of two numbers are ${difference}`;
};
console.log(getSum(10, 2));
console.log(getDifference(10, 3));
