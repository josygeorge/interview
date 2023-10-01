import React from 'react'
import { TODOS_ACTION } from './useReducer.js/Todos'

const ListTodo = (props) => {
    const { todos, dispatch } = props;
    return (
        <>
            {todos.map(todo =>
                <li key={todo.id}>
                    {todo.name}
                    <span>
                        <button
                            onClick={() =>
                                dispatch(
                                    {
                                        type: TODOS_ACTION.DELETE_TASK,
                                        payload: todo.id
                                    }
                                )
                            }>
                            Delete
                        </button>
                    </span>
                </li>)}
        </>

    )
}

export default ListTodo