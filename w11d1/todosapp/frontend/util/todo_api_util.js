import { $CombinedState } from "redux";

export const fetchTodos = () =>{
    return $.ajax({
        method:'GET',
        url: '/api/todos'
    })
}