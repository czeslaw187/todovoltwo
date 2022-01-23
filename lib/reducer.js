export const firstState = {
    todos: [],
    todosCp: []
}

export default function reducer(state = firstState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            let newState = [...state.todos]
            let newStateCp = [...state.todos]
            return {
                ...state,
                todos: newState.concat(action.payload),
                todosCp: newStateCp.concat(action.payload)
            }
        case 'REMOVE_ITEM':
            newState = state.todos.filter((el)=>{ return el.id !== action.payload })
            newStateCp = [...newState]
            console.log(newStateCp, 'remove copy')
            return {
                ...state,
                todos: newState,
                todosCp: newStateCp
            }
        case 'CLEAR_ALL':
            newState = []
            return {
                ...state,
                todos: newState,
                todosCp: newState
            }
        case 'GET_ACTIVE':     
            newState = state.todosCp.filter((el)=>{ return el.isActive !== 1})
            return {
                ...state,
                todos: newState,
                todosCp: [...state.todosCp]
            }
        case 'GET_COMPLETED':
            newState = state.todosCp.filter((el)=>{return el.isActive !== 0})
            return {
                ...state,
                todos: newState,
                todosCp: [...state.todosCp]
            }
        case 'GET_ALL':
            console.log(state.todosCp)
            return {
                ...state,
                todos: [...state.todosCp],
                todosCp: [...state.todosCp]
            }
        default:
            return state
    }
}

