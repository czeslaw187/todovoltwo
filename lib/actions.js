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

export function insertTodo(input) {
    return(dispatch)=>{
        return axios.post('http://localhost:3000/api/insertTodo',{
            content: input,
            isActive: false           
        }).then((resp)=>{dispatch(changeTodo({id:resp.data.insertId, content:input, isActive:false}))})
    }
}

// export function insertTodo(input) {
//     return(dispatch)=>{
//         dispatch(changeTodo({id:890,content:input,isActive:false}))
//     }
// }