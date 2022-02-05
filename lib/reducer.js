export const firstState = {
    todos: [],
    todosCp: [],
    isSubscribed: []
}

export default function reducer(state = firstState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            console.log(action.payload[0], 'add item reducer')
            let newState = [...state.todos]
            let newStateCp = [...state.todos]
            let newSubscriber = [...state.isSubscribed]
            return {
                ...state,
                todos: newState.concat(action.payload[0]),
                todosCp: newStateCp.concat(action.payload[0]),
                isSubscribed: newSubscriber.concat(action.payload[1])
            }
        case 'REMOVE_ITEM':
            newState = state.todos.filter((el)=>{ return el.todo_id !== action.payload })
            newStateCp = [...newState]
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
            newState = state.todosCp.filter((el)=>{ return el.isActive === 0})
            return {
                ...state,
                todos: newState,
                todosCp: [...state.todosCp]
            }
        case 'GET_COMPLETED':
            newState = state.todosCp.filter((el)=>{return el.isActive === 1})
            return {
                ...state,
                todos: newState,
                todosCp: [...state.todosCp]
            }
        case 'GET_ALL':
            return {
                ...state,
                todos: [...state.todosCp],
                todosCp: [...state.todosCp]
            }
        case 'CHANGE_ACTIVE':
            newState = [...state.todos]
            newStateCp = [...state.todosCp]
            let newId = state.todos.findIndex((el)=>{return el.todo_id == action.payload.id})
            let newIdCp = state.todosCp.findIndex((el)=>{return el.todo_id == action.payload.id})
            newState[newId].isActive = action.payload.active ? 1 : 0
            newStateCp[newIdCp].isActive = action.payload.active ? 1 : 0
            return {
                ...state,
                todos: newState,
                todosCp: newStateCp
            }
        default:
            return state
    }
}
