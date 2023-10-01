import React, { useReducer } from 'react'

const TODOS_ACTION = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
}

const initialState = []

function init(initialState) {
    const result = [...initialState, { id: 1, name: 'reading' }]
    return result;
}

function reducer(state, action) {
    switch (action.type) {
        case TODOS_ACTION.ADD_TASK:
            return [...state, {
                id: state.length + 1,
                name: action.payload
            }];
        case TODOS_ACTION.DELETE_TASK:
            return state.filter(d => d.id !== action.payload)
        default: return state;
    }
}


// MAIN Function
const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialState, init)
    return (
        <div>
            <h1>Todo app</h1>
            <h4>Todo list {todos.length}</h4>
            Add new task:
            <input
                type="text"
                onBlur={
                    (e) =>
                        dispatch(
                            { type: TODOS_ACTION.ADD_TASK, payload: e.target.value }
                        )
                }
            />
            <hr />
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
        </div>
    )
}

export default Todos