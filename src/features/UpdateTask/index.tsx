import type {typeTasks, typeTaskForUpdate} from "@shared";
import {Form} from "@entities";
import {useAppDispatch, taskUpdated} from "@features";
import {DivForm} from "./index.style";
import {omit} from "@shared";

interface typePropsAddTasks {
    task: typeTasks,
    cancelHandle: ()=> void
}

function UpdateTask(props:typePropsAddTasks) {
    const defaultTask:typeTaskForUpdate = omit<typeTasks, string>(props.task, ['id', 'date']);
    const dispatch = useAppDispatch();

    function updateTask( task: {id: string}&Partial<typeTaskForUpdate> ) {
        dispatch(
            taskUpdated(task)
        )
    }

    function taskHandle(task: typeTaskForUpdate) {
        updateTask(Object.assign({}, {id:props.task.id},task))
    }

    return (<DivForm onClick={e=>e.stopPropagation()}>
            <h2> Изменить задачу №{props.task.id} </h2>
            <Form<typeTaskForUpdate> default={defaultTask} submit={{text: 'Update', handle:taskHandle}} cancelHandle={props.cancelHandle} />
        </DivForm>
    );
}

export default UpdateTask;