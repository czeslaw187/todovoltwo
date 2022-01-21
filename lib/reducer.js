export const firstState = {
    todos: []
}

export default function reducer(state = firstState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            let newState = [...state.todos]
            return {
                ...state,
                todos: newState.concat(action.payload)
            }
        case 'REMOVE_ITEM':
            return state = state.todos.filter((el)=>(el.id !== action.payload))
        default:
            return state
    }
}

