# Backtick 模板字符串

模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号
```javascript
`${expression}`
```
e.g.
```javascript

// Untagged, these create strings:

const untagged = `string text ${expression} string text`;

// Re-usable template:
const templateFn = expression => `string text ${expression} string text`;

// Tagged, this calls the function "example" with the template as the
// first argument and substitution values as subsequent arguments:
example`string text ${expression} string text`
```


# array.map()
1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.