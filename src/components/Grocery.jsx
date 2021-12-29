import React from 'react';
import {GroceryInput} from './GroceryInput';
import {GroceryList} from './GroceryList';
import { useState } from 'react';
import { nanoid } from 'nanoid';


export const Grocery = () => {
    const [value,setValue] = useState([]);
    const getItem = (item) => {

        const groceryItems = {
            name : item,
            state : false,
            id : nanoid(7)
        }
        setValue([...value,groceryItems])
    }

    const deleteItem = (id) => {
        const updateItem = value.filter((item) => item.id !== id)
        setValue(updateItem);
    }


    return (
        <div>
            <>
            <GroceryInput getItem={getItem} />
            {value.map((e) => <GroceryList key={e.id} {...e} deleteItem={deleteItem}/>)}

            </>
        </div>
    )
}

export default Grocery;
