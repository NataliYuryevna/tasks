import {createSelector, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import type {typeTasks} from "@shared";
import {tasksMock} from "@shared";

const tasksSlice = createSlice({
    name: 'task',
    initialState: tasksMock,
    reducers: {
        taskAdded: {
            reducer(state, action: PayloadAction<typeTasks>) {
                state.push(action.payload);
            },
            prepare(name:string, description: string, priority:number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        description,
                        priority,
                        completed: false
                    }
                }
            }
        }
    }
})

export const selectAllTasks = (state: { tasks: typeTasks[] }) => state.tasks;

export const {taskAdded} = tasksSlice.actions;

export default tasksSlice.reducer