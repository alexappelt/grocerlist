import React from 'react'
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck ,handleTrashButton }) => {

return (
    <ul>   
            {items.map((item)=>(
                <LineItem 
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleTrashButton={handleTrashButton}
                />
            ))}
            </ul>
)

            }

export default ItemList