const initialState = {
  user: {},
  workOrders: [],
  tenants: [],
  units: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "GET_WORK_ORDER":
      return { ...state , workOrders: action.payload};
    case "UPDATE_UNITS":
      return { ...state, units: action.payload };
    default:
      return state;
  }
}


export default function reducer (state = initialState, action) {
    switch(action.type) {
        case "UPDATE_USER": return {...state, user: action.payload}
        case "GET_WORK_ORDER": return {...state}
        case "UPDATE_UNITS": return {...state}
        case "UPDATE_TENANTS": return {...state, tenants: action.payload}
        default: return state
    }

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "UPDATE_USER":
//       return { ...state, user: action.payload };
//     case "GET_WORK_ORDER":
//       return { ...state };
//     default:
//       return state;
//   }
}

