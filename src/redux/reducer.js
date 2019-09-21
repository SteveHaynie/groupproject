const initialState = {
    user: {},
    workOrders: [],
    tenants: [],
    units: []

}


export default function reducer (state = initialState, action) {
    switch(action.type) {
        case "UPDATE_USER": return {...state, user: action.payload}
        default: return state
    }

}