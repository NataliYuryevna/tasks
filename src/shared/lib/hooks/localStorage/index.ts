function getStorageValue<T>(key:string, defaultValue:T):T {
    try{
        const serialisedState = localStorage.getItem(key);
        if(serialisedState === null) {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
        return JSON.parse(serialisedState);
    }catch(e){
        console.warn(e);
        return defaultValue;
    }
}

function updateStorage<T>(key:string, value:T) {
    localStorage.setItem(key, JSON.stringify(value));
}

export {getStorageValue, updateStorage};