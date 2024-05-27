import type {typeTaskForAdd} from "@shared";
import {Form} from "@entities";
import {useAppDispatch, taskAdded} from "@features";
import {DivForm} from "./index.style";

interface typePropsAddTasks {
    cancelHandle: ()=> void
}

function AddTask(props:typePropsAddTasks) {
    const defaultTask:typeTaskForAdd = {name:'', description:''};
    const dispatch = useAppDispatch();

    function addTask( task: typeTaskForAdd) {
        dispatch(
            taskAdded((task['name']||'').toString(), (task['description']||'').toString(), 0)
        )
    }

    return (<DivForm onClick={e=>e.stopPropagation()}>
            <h2> Добавить новую задачу </h2>
            <Form<typeTaskForAdd> default={defaultTask} submit={{text: 'Add', handle:addTask}} cancelHandle={props.cancelHandle} />
        </DivForm>
    );
}

export default AddTask;