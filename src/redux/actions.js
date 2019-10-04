export const workOrderView = (workOrders) => {
    return {
        type: 'GET_WORK_ORDER',
        payload: workOrders
    }

}

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

export const updateTenants = (tenants) => {
    return {
        type: 'UPDATE_TENANTS',
        payload: tenants
    }
}
