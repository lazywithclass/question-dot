# CoffeeScript's accessor variant of the existential operator ?. for JavaScript

### Example

```javascript
var obj = { answer: 42 }
console.log(obj?.answer); // 42
console.log(obj?.question); // undefined, not ReferenceError
``` 

### Test
    
To run tests use `make`
