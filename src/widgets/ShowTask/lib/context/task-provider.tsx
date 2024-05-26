import { ReactNode, useMemo } from 'react';
import { TaskContext, taskContextProps } from '../../../../entities/ui/Table/task.context';

type TaskProviderProps = taskContextProps & {
    children: ReactNode;
};

export function TaskProvider(props: TaskProviderProps) {
    const { onClickTask, children } = props;

    const memoizedValue = useMemo(
        () => ({ onClickTask }),
        [onClickTask],
    );

    return (
        <TaskContext.Provider value={memoizedValue}>
            {children}
        </TaskContext.Provider>
    );
}