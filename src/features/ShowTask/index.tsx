import type { typeTasks} from "@shared";
import {useAppDispatch, taskDelete} from "@features";
import {DivShow, Buttons} from "./index.style";
import {Text} from "@entities";
import {Button, omit} from "@shared";
import {useState} from "react";

interface typePropsAddTasks {
    cancelHandle: ()=> void,
    task: typeTasks
}

function ShowTask(props:typePropsAddTasks) {
    const [openConfirmation,setOpen] = useState(false);
    const dispatch = useAppDispatch();

    function showConfirmation() {
        setOpen(true);
    }

    function hiddenConfirmation() {
        setOpen(false)
        props.cancelHandle();
    }

    function deleteTask(id:string) {
        dispatch(
            taskDelete({id})
        )
        props.cancelHandle();
    }

    return (<DivShow onClick={e=>e.stopPropagation()}>
            {openConfirmation ? <Text text={`Вы действительно хотите удалить задачу\u00A0№${props.task.id}`}>
                    <Buttons>
                        <Button type="cancel" onClick={hiddenConfirmation} text={'Cancel'}/>
                        <Button onClick={()=>deleteTask(props.task.id)} text={'Delete'}/>
                    </Buttons>
                </Text>
                :
                <>
                    <h2> Задача №{props.task.id} </h2>
                    <Text text={omit<typeTasks,string>(props.task, ['id'])}>
                        <Buttons>
                            <Button type="cancel" onClick={props.cancelHandle} text={'Cancel'}/>
                            <Button onClick={showConfirmation} text={'Delete'}/>
                        </Buttons>
                    </Text>
                </>
            }
        </DivShow>
    );
}

export default ShowTask;