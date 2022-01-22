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
            newState = state.todos.filter((el)=>{ return el.id !== action.payload })
            return {
                ...state,
                todos: newState
            }
        case 'CLEAR_ALL':
            newState = []
            return {
                ...state,
                todos: newState
            }
        case 'GET_ACTIVE':
            newState = state.todos.filter((el)=>{ return el.isActive !== 1})
            console.log(newState, 'new state')
            return {
                ...state,
                todos: newState
            }
        case 'GET_COMPLETED':
            newState = state.todos.filter((el)=>{return el.isActive !== 0})
            return {
                ...state,
                todos: newState
            }
        default:
            return state
    }
}

