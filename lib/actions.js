import axios from 'axios'

export function loadTodo(session) {
    return(dispatch)=>{
        return axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/getAll', {
            session: session.session
        }).then((resp)=>{dispatch(changeTodo(resp.data))})               
    }
}

export function changeTodo(todo) {
    return {
        type: 'ADD_ITEM',
        payload: todo
    }
}

export function insertTodo(input, userEmail) {
    return(dispatch)=>{
        return axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/insertTodo',{
            content: input,
            isActive: 0, 
            email: userEmail           
        }).then((resp)=>{dispatch(changeTodo([{todo_id:resp.data.insertId, content:input, isActive:0, email:userEmail}]))})
    }
}

export function removeTodo(id, userEmail) {
    return(dispatch)=>{
        return axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/removeTodo', {
            id: id,
            email: userEmail
        }).then((resp)=>{dispatch({type:'REMOVE_ITEM', payload:id})})
    }
}

export function changeActive(id, active, userEmail) {
    return(dispatch)=>{
        return axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/activation',{
            id: id,
            isActive: active,
            email: userEmail
        }).then((resp)=>{dispatch({type: 'CHANGE_ACTIVE', payload: {id:id, active:active, email:userEmail}})})
    }
}

export function removeAllTodo(userEmail) {
    return(dispatch)=>{
        return axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/removeAll',{
            email: userEmail
        }).then((resp)=>{dispatch({type:'CLEAR_ALL'})})
    }
}

export function filterActiveTodo() {
    return async(dispatch)=>{
        await dispatch({type: 'GET_ACTIVE'})
    }
}

export function filterCompleteTodo() {
    return async(dispatch)=>{
        await dispatch({type: 'GET_COMPLETED'})
    }
}

export function getAllTodos() {
    return (dispatch)=>{
        dispatch({type: 'GET_ALL'})
    }
}