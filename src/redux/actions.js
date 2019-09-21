export const addOne = () => {
    return {
        type: 'ADD_ONE'
    }

}

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }

}