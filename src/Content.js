
import ItemList from './ItemList';
const Content = ({items, handleCheck ,handleTrashButton}) => {



    return(
        <main>
            {items.length? (
                <ItemList 
                items={items} 
                handleCheck={handleCheck} 
                handleTrashButton={handleTrashButton} 
                />
            ) : <h1>Items Empty</h1>
           }
        </main>
    )    
}

export default Content;