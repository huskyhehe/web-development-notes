# Backtick

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
  

# Array.map()
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
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
  

**Challenge 1:**  
Given an array of numbers, return an array of each number, squared
```javascript
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]

// Your code here
const squares = nums.map(function(num) {
    return num * num
});
```

**Challenge 2:**  
Given an array of strings, return an array where 
the first letter of each string is capitalized
```javascript
const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
});
```

**Challenge 3:**  
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like tag.

```javascript
/*
E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

// Your code here
const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
});
```

# Spread Syntax
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax


# State
1. How would you describe the concept of "state"?  
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?  
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?  
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?  
Unchanging. Props are immutable. State is mutable.


# Conditional (ternary) operator
```javascript
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```