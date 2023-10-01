import React, { useReducer } from 'react'

const ACTION_TYPES = {
    ADDTASK: 'add_task',
}

const initialState = []

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                id: state.length + 1,
                name: action.payload
            }]
        default: return state;
    }
}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialState)
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
                            { type: 'ADD_TASK', payload: e.target.value }
                        )
                }
            />
            <hr />
            {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
        </div>
    )
}

export default Todos