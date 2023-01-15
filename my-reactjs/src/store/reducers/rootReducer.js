
const initState = {
    users: [
        { id: 1, name: 'Don' },
        { id: 2, name: 'Dinh' },
        { id: 3, name: 'My Dinh' },
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;