// import { type } from 'os';
import React, { Dispatch, useState, SetStateAction } from 'react'
import { postTodo } from './api';

type TodoInputProps = {
    update: () => void;
}

export const TodoInput = ({ update }: TodoInputProps) => {

    const [title, settitle] = useState<string>("")



    const handlesubmit = () => {
        console.log(title)
        postTodo(title)
        settitle("")

        update()


    }
    const handlesubmits = (e: React.ChangeEvent<HTMLInputElement>) => {
        settitle(e.target.value)

    }


    return (
        <div>
            <input type="text" value={title} onChange={handlesubmits} placeholder='title' />
            <button onClick={handlesubmit} >Add</button>
        </div>
    )
}
