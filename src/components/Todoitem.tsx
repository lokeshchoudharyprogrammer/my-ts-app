import React from 'react'
import { Todo } from './contants';

// export const Todoitem = (data:Todo) => {
export const Todoitem = ({ title, id, status }: Todo) => {

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h1>{title}</h1>
      <h1>{status ? "Done" : "Plz Do it"}</h1>
      <button style={{ width: "52px", height: "42px" }}>Toggle Btn</button>
    </div>
  )
}
