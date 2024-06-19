console.log('Welcome')

const getSum = (first: number, second: number) => {
    // return `Your sum of two numbers are ${first + second}`;
    return first + second
}

const getDifference = (first: number, second: number) => {
    const difference = first - second
    if(difference < 0 )return `Result is below 0`
    return `Your sum of two numbers are ${difference}`;
}

const test = () => {
    
}

console.log(getSum(10,2))
console.log(getDifference(10,3));