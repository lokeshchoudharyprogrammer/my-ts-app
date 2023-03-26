import axios, { AxiosResponse } from "axios"
import { Todo } from "./contants";

export const postTodo = async (title: string) => {
    let newTodoObject: Todo = {
        title,
        status: false,


    };

    const res: AxiosResponse<Todo> = await axios.post('http://localhost:8080/todo', newTodoObject);
    console.log(res)
}


export const GetTodo = async () => {
    const res: AxiosResponse<Todo[]> = await axios.get('http://localhost:8080/todo')

    return res.data
}

// GetTodo()