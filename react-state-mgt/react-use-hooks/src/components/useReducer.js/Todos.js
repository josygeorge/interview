import React, { useReducer } from 'react'

const ACTION_TYPES = {
    ADDTASK: 'add_task',
}

const initialState = []

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('ADD');
            break;
        default: return state;
    }
}

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>Todo app</div>
    )
}

export default Todos