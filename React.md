# useState()
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
   a. New value of state (setCount(42))  
   b. Callback function - whatever the callback function returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?  
   Whenever you don't need the previous value of state to determine what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?  
   Whenever you DO need the previous value to determine the new value
<<<<<<< HEAD

```javascript
import React from "react"

export default function App() {

    const [count, setCount] = React.useState(0);
    
    function add() {
        setCount(prevCount => prevCount + 1)
    };    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    };
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    );
}
```