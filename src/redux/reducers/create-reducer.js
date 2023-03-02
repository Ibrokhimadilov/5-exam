const initialState = {
    email: ""
}

const createReducer = (state=initialState, action) => {
    switch(action.type){
        case "CREATE_USER":
            return {email: action.email}
            default:
            return state
    }
}

export default createReducer