import {createSelector, createSlice, Draft, nanoid, PayloadAction} from "@reduxjs/toolkit";
import type {typeTasks} from "@shared";
import {tasksMock, getStorageValue, updateStorage} from "@shared";

const nameStorage = 'tasks';

const tasksSlice = createSlice({
    name: 'task',
    initialState: getStorageValue<typeTasks[]>(nameStorage,tasksMock as typeTasks[]),
    reducers: {
        taskAdded: {
            reducer(state, action: PayloadAction<typeTasks>) {
                state.push(action.payload);
                updateStorage<typeTasks[]>(nameStorage, state);
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
        taskDeleted(state, action: PayloadAction<string>) {
            const result = state.filter((el:Draft<typeTasks>)=>el.id !== action.payload);
            updateStorage<typeTasks[]>(nameStorage, result);
            return result;
        },
        taskUpdated: {
            reducer(state, action: PayloadAction<Partial<typeTasks>>) {
                const result = state.map(el=>el.id === action.payload.id ? {...el, ...action.payload } : el);
                updateStorage<typeTasks[]>(nameStorage, result);
                return result;
            },
            prepare( task:{id: string, name?:string, description?: string, priority?:number, completed?:boolean} ) {
                return {
                    payload: {
                        id: task.id,
                        name: task.name,
                        description: task.description,
                        priority: task.priority,
                        completed: task.completed,
                        date: new Date().toString(),
                    }
                }
            }
        }
    }
})

function compareFn(a: typeTasks, b:typeTasks) {
    if (a.priority <  b.priority) {
        return -1;
    } else if (a.priority > b.priority) {
        return 1;
    } else {
        if(a.date && b.date) {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime()
            if (dateA > dateB) {
                return 1;
            } else if (dateA < dateB) {
                return -1;
            }
        }
        return 0;
    }
}

function compareFnCompleted(a: typeTasks, b:typeTasks) {
    if (a.completed ===  b.completed ) {
        return compareFn(a,b)
    } else if(a.completed === true) {
        return -1;
    }
    return 1;
}

export const selectAllTasks = (state: { tasks: typeTasks[] }) => [...state.tasks].sort(compareFn);

export const selectSortTasks = createSelector(
    (state: {tasks:typeTasks[]}) => state.tasks,
    (_:{ tasks: typeTasks[] }, sort: boolean) => sort,
    (tasks: typeTasks[], sort: boolean) => {
        if(sort) {
            return [...tasks].sort(compareFnCompleted)
        }
        return [...tasks].sort(compareFn);
    },
)

export const {taskAdded, taskDeleted, taskUpdated} = tasksSlice.actions;

export default tasksSlice.reducer