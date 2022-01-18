import axios from 'axios'

export function loadTodo() {
    return(dispatch)=>{
        return axios.get('http://localhost:3000/api/getAll')
               .then((resp)=>{dispatch(changeTodo(resp.data))})
    }
}

export function changeTodo(todo) {
    return {
        type: 'ADD_ITEM',
        payload: todo
    }
}