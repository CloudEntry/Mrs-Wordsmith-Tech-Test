## This is the Git repository for the Mrs Wordsmith Technical Test

Answer to Task 1 can be found in src/Memoizer.ts   
Answer to Task 2 can be found in src/NumberConverter.ts   
Answer to Task 3 can be found in src/AcctMgmtApi.ts   

### Task 1: Memoizer
The solution can be found by running ```node Memoizer.js``` from the base directory.   

The ```memoize``` function takes a function ```func``` as its parameter. 
It initializes an empty cache using a ```Map``` to store previously computed results.
The returned function is an anonymous function ```(arg: T) => R``` which acts as the memoized version of the input function. 
It first checks if the cache already has a value for the given argument arg. 
If so, it retrieves and returns the cached value. Otherwise, it calls the original function func with the argument arg, 
stores the result in the cache, and then returns the result.   

The ```expensiveCalculation``` function is an example of a function that takes a number and performs a costly computation. 
The ```memoize``` function is used to create a memoized version of ```expensiveCalculation``` called ```memoizedCalculation```. 
When ```memoizedCalculation``` is called multiple times with the same argument, the expensive computation is only performed once, 
and subsequent calls retrieve the cached value.   

### Task 2: Number Conversion
The solution can be found by running ```node Memoizer.js``` from the base directory.   

The ```arabicToRoman``` function takes a number ```num``` as its parameter and converts it into a Roman numeral string.   
The function starts by checking if the input number is less than or equal to 0. If it is, an error is thrown since Roman numerals 
are not defined for non-positive numbers.   

Next, an array ```romanSymbols``` is defined, which contains tuples of Arabic number values and their corresponding Roman numeral symbols. 
The array is sorted in descending order to ensure the largest possible value is used first during conversion.
The function then iterates through the ```romanSymbols``` array and checks if the remaining number is greater than or equal to the 
current symbol's value. If it is, the corresponding symbol is appended to the ```romanNumeral``` string, and the remaining number is 
decreased by the symbol's value. This process continues until the remaining number is less than the current symbol's value.   
Finally, the function returns the ```romanNumeral``` string, which represents the Roman numeral equivalent of the input number.

### Task 3: Simple account management API
The solution can be found by running ```node AcctMgmtApi.js``` from the base directory. This will start the API server running on port 3000, 
though this can be easily changed by changing the port number on line 90.    

This solution uses the Express framework to build the API, and the Body Parser library for a simple middleware implementation.   

Once the server is running, an account can be created by running the cURL command in the terminal:   
```curl -X POST -H "Content-Type: application/json" -d '{"id": "1", "name": "John Doe", "address": "123 High Street", "phone": "012345", "email": "john.doe@gmail.com"}' http://localhost:3000/accounts```  

The account data can then be fetched by running the following command:   
```curl -X GET -H "Content-Type: application/json" http://localhost:3000/accounts/1```  

The account data can also be updated with the following command:   
```curl -X PUT -H "Content-Type: application/json" -d '{"id": "1", "name": "John Doe", "address": "123 Low Street", "phone": "543210", "email": "doe.john@gmail.com"}' http://localhost:3000/accounts/1```  

And finally, deleted like so:   
```curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/accounts/1```
