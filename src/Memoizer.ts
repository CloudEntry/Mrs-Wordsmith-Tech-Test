type Func<T, R> = (arg: T) => R;

function memoize<T, R>(func: Func<T, R>): Func<T, R> {
    const cache: Map<T, R> = new Map();

    return (arg: T): R => {
        if (cache.has(arg)) {
            return cache.get(arg)!;
        }
        const result = func(arg);
        cache.set(arg, result);
        return result;
    };
}

function expensiveCalculation(n: number): number {
    console.log("Performing expensive calculation...");
    return n * 2;
}

const memoizedCalculation = memoize(expensiveCalculation);

console.log(memoizedCalculation(5));  // Performs expensive calculation... (returns 10)
console.log(memoizedCalculation(5));  // (returns 10, retrieved from cache)
console.log(memoizedCalculation(10)); // Performs expensive calculation... (returns 20)
console.log(memoizedCalculation(10)); // (returns 20, retrieved from cache)
