import React from 'react'

export const GroceryList = ({name,status,id,deleteItem}) => {
    return (
        <div>
            {name} - {status ? "Done" : "Not Done" }
            <button onClick={() => deleteItem(id)}>Delete</button>
        </div>
    )
}

export default GroceryList;
