

const getStoredAddProperty = () =>{
    const storedAddProperty = localStorage.getItem('favorites');
    if(storedAddProperty){
        return JSON.parse(storedAddProperty)
    }
    return [];
}

const saveAddProperty = idInt =>{
    const storedAddProperty = getStoredAddProperty();
    const exists = storedAddProperty.find(id => id === idInt);
    if(!exists){
        storedAddProperty.push(idInt);
        localStorage.setItem('favorites', JSON.stringify(storedAddProperty));
    }

    return !exists;
}


const removeFromFavoriteList = (id) => {

    const items = getStoredAddProperty();
    const index = items.indexOf(id);
    
    if (index !== -1) {
        // Remove the ID from the array
        items.splice(index, 1);
        
        // Update the stored IDs in local storage
        localStorage.setItem('favorites', JSON.stringify(items));
        
        console.log(`ID ${id} removed from local storage.`);
    } else {
        console.log(`ID ${id} not found in local storage.`);
    }
}





export {getStoredAddProperty, saveAddProperty, removeFromFavoriteList}