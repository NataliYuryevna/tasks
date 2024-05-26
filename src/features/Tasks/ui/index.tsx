import type {typeTasks} from "@shared";
import {selectAllTasks, selectSortTasks, useTasksSelector} from "../lib";
import {Table} from "@entities"

interface typePropsTasks {
    sortCompleted: boolean
}

function TasksComponents(props:typePropsTasks) {
    const tasks = useTasksSelector((state)=>selectSortTasks(state, props.sortCompleted));

    return (<>
            {!!tasks.length &&
                <Table<typeTasks> body={tasks} head={["name"]}>
                </Table>
            }
        </>
    );
}

export default TasksComponents;