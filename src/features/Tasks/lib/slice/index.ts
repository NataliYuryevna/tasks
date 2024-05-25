import {createSelector, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import type {typeTasks} from "@shared";
import {tasksMock} from "@shared";

const tasksSlice = createSlice({
    name: 'task',
    initialState: tasksMock,
    reducers: {
    }
})

export const selectAllTasks = (state: { tasks: typeTasks[] }) => state.tasks;
export default tasksSlice.reducer