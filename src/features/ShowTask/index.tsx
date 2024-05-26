import type { typeTasks} from "@shared";
import {useAppDispatch, taskDeleted, UpdateTask} from "@features";
import {DivShow, Buttons} from "./index.style";
import {Text} from "@entities";
import {Button, omit} from "@shared";
import {useEffect, useState} from "react";

interface typePropsAddTasks {
    cancelHandle: ()=> void,
    task: typeTasks|null
}

function ShowTask(props:typePropsAddTasks) {
    const [openConfirmation,setOpen] = useState(false);
    const [openUpdate,setOpenUpdate] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!props.task){
            setOpenUpdate(false);
            setOpen(false);
        }

    }, [props.task]);

    function showConfirmation() {
        setOpen(true);
    }

    function hiddenConfirmation() {
        setOpen(false)
        props.cancelHandle();
    }

    function deleteTask(id:string) {
        dispatch(
            taskDeleted(id)
        )
        props.cancelHandle();
    }

    function showUpdateTask() {
        setOpenUpdate(true);
    }

    function closeUpdateTask() {
        setOpenUpdate(false);
        props.cancelHandle();
    }

    return (<>{props.task && <>
        {!openUpdate ? <DivShow onClick={e=>e.stopPropagation()}>
                {openConfirmation ? <Text text={`Вы действительно хотите удалить задачу\u00A0№${props.task.id}`}>
                        <Buttons>
                            <Button type="cancel" onClick={hiddenConfirmation} text={'Cancel'}/>
                            <Button onClick={()=>props.task && deleteTask(props.task.id)} text={'Delete'}/>
                        </Buttons>
                    </Text>
                    :
                    <>
                        <h2> Задача №{props.task.id} </h2>
                        <Text text={omit<typeTasks,string>(props.task, ['id'])}>
                            <Buttons>
                                <Button onClick={showConfirmation} text={'Delete'}/>
                                <Button onClick={showUpdateTask} text={'Update'}/>
                            </Buttons>
                        </Text>
                    </>
                }
            </DivShow>
            : <UpdateTask task={props.task} cancelHandle={closeUpdateTask}/>
        }
        </>
    }</>
    );
}

export default ShowTask;