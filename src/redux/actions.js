export const workOrderView = () => {
  return {
    type: "GET_WORK_ORDER"
  };
};

// export const updateUser = user => {
//   return {
//     type: "UPDATE_USER",
//     payload: user
//   };
// };

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }

}

export const updateUnits = (units) => {
    return {
        type: 'UPDATE_UNITS',
        payload: units
        
    }

}
<<<<<<< HEAD

export const updateTenants = (tenants) => {
    return {
        type: 'UPDATE_TENANTS',
        payload: tenants
    }
}
=======
>>>>>>> master
