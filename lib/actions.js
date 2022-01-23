import axios from 'axios'

export function loadTodo() {
    return(dispatch)=>{
        return axios.get('https://todovoltwo.herokuapp.com/api/getAll')
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
        return axios.post('https://todovoltwo.herokuapp.com/api/insertTodo',{
            content: input,
            isActive: false           
        }).then((resp)=>{dispatch(changeTodo({id:resp.data.insertId, content:input, isActive:false}))})
    }
}

export function removeTodo(id) {
    return(dispatch)=>{
        return axios.post('https://todovoltwo.herokuapp.com/api/removeTodo', {
            id: id
        }).then((resp)=>{console.log(resp);dispatch({type:'REMOVE_ITEM', payload:id})})
    }
}

export function changeActive(id, active) {
    return(dispatch)=>{
        return axios.post('https://todovoltwo.herokuapp.com/api/activation',{
            id: id,
            isActive: active
        }).then((resp)=>{console.log(null)})
    }
}

export function removeAllTodo() {
    return(dispatch)=>{
        return axios.get('https://todovoltwo.herokuapp.com/api/removeAll')
        .then((resp)=>{dispatch({type:'CLEAR_ALL'})})
    }
}

export function filterActiveTodo() {
    return async(dispatch)=>{
        await dispatch({type: 'CLEAR_ALL'})
        await dispatch(loadTodo())
        await dispatch({type: 'GET_ACTIVE'})
    }
}

export function filterCompleteTodo() {
    return async(dispatch)=>{
        await dispatch({type: 'CLEAR_ALL'})
        await dispatch(loadTodo())
        await dispatch({type: 'GET_COMPLETED'})
    }
}