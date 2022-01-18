export const firstState = {
    todos: []
}

export default function reducer(state = firstState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                todos: action.payload
            }
        case 'REMOVE_ITEM':
            return state = state.todos.filter((el)=>(el.id !== action.payload))
        default:
            return state
    }
}

