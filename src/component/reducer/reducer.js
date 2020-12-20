// initialState
export const initialState = {
    user: null,
}


// reducer
const reducer = (state, action) => {
    console.log("ACTION", action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        default:
            return state;
    }
}

export default reducer;