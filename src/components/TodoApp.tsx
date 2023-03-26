import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { Todo } from './contants';
import { GetTodo } from './api';
import { Todoitem } from './Todoitem';

export const TodoApp = () => {


    const [todo, setTodos] = useState<Todo[]>([]);



    const [update, setUpdate] = useState<boolean>(false)



    const onAdd = () => {
        setUpdate((re) => !re)
    }

    



    useEffect(() => {
        GetTodo().then((res) => {
            setTodos(res)
        })

    }, [update])



    return (
        <div>
            <TodoInput update={onAdd} />
            {
                todo.map((el) => {
                    return <Todoitem key={el.id} {...el} />
                })
            }
        </div>
    )
}
