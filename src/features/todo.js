import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: [],

    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload)
        },

        deleteTodo: (state, action) => {
            state.splice(action.payload, 1)
        },

        updateTodo: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.index) {
                    return { ...todo, text: action.payload.editInput }
                }
                else {
                    return todo
                }
            })
        },
        checkTodo: (state, action) => {
            return state.map((todo) => {
                return todo.id === action.payload.index ? { ...todo, checked: !todo.checked } : todo;
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;