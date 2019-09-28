const initialState = {
<<<<<<< HEAD
    user: {},
    workOrders: [],
    tenants: [],
    units: []
=======
  user: {},
  workOrders: [],
  tenants: [],
  units: []
};
>>>>>>> master

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
