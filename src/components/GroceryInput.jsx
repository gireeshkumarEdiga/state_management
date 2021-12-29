import { useState } from 'react'

export const GroceryInput = ({getItem}) => {

    const [item,setItem] = useState("");
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleClick = () => {
        getItem(item)
    }
    return (
        <div>
            <>
            <input  type="text" placeholder='Enter your Grocery list' onChange={handleChange}/>
            <button onClick={handleClick}>Add to the list</button>
            </>
        </div>
    )
}

export default GroceryInput;