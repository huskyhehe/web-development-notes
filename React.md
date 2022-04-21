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
## updating useState arrays
Notice: the use of spread syntax
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
```
## updating useState objects
Notice: the use of spread syntax
```javascript
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
```