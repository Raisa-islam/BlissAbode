
const getKeyFromEmail = (email) => {
    // Convert the email to a string that can be used as a key
    return `user_${email}`;
};

const getStoredAddProperty = (email) =>{
    const key = getKeyFromEmail(email);
    const storedAddProperty = localStorage.getItem(key);
    if(storedAddProperty){
        return JSON.parse(storedAddProperty)
    }
    return [];
}

const saveAddProperty = (idInt, email) =>{
    console.log(email);
    const key = getKeyFromEmail(email);
    const storedAddProperty = getStoredAddProperty(email);
    const exists = storedAddProperty.find(id => id === idInt);
    if(!exists){
        console.log(storedAddProperty);
        storedAddProperty.push(idInt);
        console.log(storedAddProperty)
        localStorage.setItem(key, JSON.stringify(storedAddProperty));
    }

    return !exists;
}


const removeFromFavoriteList = (id, email) => {
    const key = getKeyFromEmail(email);
    const items = getStoredAddProperty(email);
    const index = items.indexOf(id);
    
    if (index !== -1) {
        console.log(items)
        items.splice(index, 1);
        console.log(items)
        localStorage.setItem(key, JSON.stringify(items));
        
        console.log(`ID ${id} removed from local storage.`);
    } else {
        console.log(`ID ${id} not found in local storage.`);
    }
}





export {getStoredAddProperty, saveAddProperty, removeFromFavoriteList}