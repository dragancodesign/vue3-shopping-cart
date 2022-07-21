
### Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator  

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (```?```), then an expression to execute if the condition is ```truthy``` followed by a colon (```:```), and finally the expression to execute if the condition is ```falsy```. This operator is frequently used as an alternative to an ```if...else``` statement. 

- Syntax  
```js
condition ? exprIfTrue : exprIfFalse
```
- Parameters  
```js
condition
```
An expression whose value is used as a condition.  
```js
exprIfTrue
```
An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).  
```js
exprIfFalse
```
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).  

- Description  

Besides ```false```, possible falsy expressions are: ```null```, ```NaN```, ```0```, the empty string (```""```), and ```undefined```. If ```condition``` is any of these, the result of the conditional expression will be the result of executing the expression ```exprIfFalse```.  

