export const workOrderView = () => {
  return {
    type: "GET_WORK_ORDER"
  };
};

export const updateUser = user => {
  return {
    type: "UPDATE_USER",
    payload: user
  };
};

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }

}

export const updateUnits = () => {
    return {
        type: 'UPDATE_UNITS'
        
    }

}
