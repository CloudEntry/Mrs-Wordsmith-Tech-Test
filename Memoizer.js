"use strict";
function memoize(func) {
    const cache = new Map();
    const memoizedFn = (...args) => {
        const cacheKey = JSON.stringify(args);
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }
        const result = func(...args);
        cache.set(cacheKey, result);
        return result;
    };
    return memoizedFn;
}
function sum(...numbers) {
    console.log("Performing expensive sum...");
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2)); // Performs expensive calculation... (returns 3)
console.log(memoizedSum(1, 2)); // (returns 3, retrieved from cache)
console.log(memoizedSum(1, 2, 3)); // Performs expensive calculation... (returns 6)
console.log(memoizedSum(1, 2, 3)); // (returns 6, retrieved from cache)
