const initialState = {
  user: {},
  workOrders: [
    {
      unit_id: "101-n",
      id: 7,
      created_at: "timestamp",
      description: "toilet broken",
      photo: "text"
    },
    { id: 8, created_at: "timestamp", unit_id: "101-N" },
    { id: 98, created_at: "timestamp", unit_id: "101-N" }
  ],
  tenants: [],
  units: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "GET_WORK_ORDER":
      return { ...state };
    case "UPDATE_UNITS":
      return { ...state, units: action.payload };
    default:
      return state;
  }
}
