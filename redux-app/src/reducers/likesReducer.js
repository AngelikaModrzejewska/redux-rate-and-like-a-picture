export const likesReducer = (state = { count: 6 }, action) => {

    if (action.type === 'COUNT') {
        return { count: state.count + 1 };
    } else {
        return state;
    }
}