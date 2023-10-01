import React, { useReducer } from 'react'
import ListTodo from '../ListTodo';

export const TODOS_ACTION = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    RESET_TASKS: 'reset_tasks',
}

const initialState = []

function init(initialState) {

    return initialState;
}

function reducer(state, action) {
    switch (action.type) {
        case TODOS_ACTION.ADD_TASK:
            return [...state, {
                id: state.length + 1,
                name: action.payload
            }];
        case TODOS_ACTION.DELETE_TASK:
            return state.filter(d => d.id !== action.payload);
        case TODOS_ACTION.RESET_TASKS:
            return init(action.payload);
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
            Add new todo task:
            <input
                type="text"
                onBlur={
                    (e) =>
                        dispatch(
                            { type: TODOS_ACTION.ADD_TASK, payload: e.target.value }
                        )
                }
            />
            <button onClick={() => dispatch({ type: TODOS_ACTION.RESET_TASKS, payload: initialState })}>Reset tasks</button>
            <hr />
            {/* component listing todos */}
            <ListTodo todos={todos} dispatch={dispatch} />
        </div>
    )
}

export default Todos