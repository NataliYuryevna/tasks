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
                        completed: false,
                        date: new Date().toString(),
                    }
                }
            }
        },
        taskDelete(state, action: PayloadAction<{id: string}>) {
            return state.filter(el=>el.id !== action.payload.id)
        }
    }
})

function compareFn(a: typeTasks, b:typeTasks) {
    if (a.priority <  b.priority) {
        return -1;
    } else if (a.priority > b.priority) {
        return 1;
    } else {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime()
        if (dateA > dateB) {
            return 1;
        } else if (dateA < dateB) {
            return -1;
        }
        return 0;
    }
}

export const selectAllTasks = (state: { tasks: typeTasks[] }) => [...state.tasks].sort(compareFn);

export const {taskAdded, taskDelete} = tasksSlice.actions;

export default tasksSlice.reducer