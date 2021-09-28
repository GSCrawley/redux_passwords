const PASSWORDS_STATE = "PASSWORDS_STATE"

//load state

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(PASSWORDS_STATE)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(err) {
        return undefined
    }
}

//save state
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(PASSWORDS_STATE, serializedState)
    } catch(err) {
        console.log("Error saving data:"+err)
    }
}
