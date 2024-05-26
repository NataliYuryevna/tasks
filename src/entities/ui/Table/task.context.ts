import { createContext, useContext } from 'react';
import type {typeTasks} from "@shared";

export type taskContextProps = {
    onClickTask:(task:typeTasks)=>void
};

export const TaskContext = createContext<taskContextProps | null>(null);
TaskContext.displayName = 'TaskContext';

export function useTaskContext() {
    const ctx = useContext(TaskContext);

    if (!ctx) {
        throw new Error('useTaskContext must be used within a <ShowTask />');
    }

    return ctx;
}