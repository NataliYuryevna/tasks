import type {typeTasks} from "@shared";
import {selectAllTasks, useTasksSelector} from "../lib";
import {Table} from "../../../entities/ui"

interface typePropsTasks {
}

function TasksComponents(props:typePropsTasks) {
    const tasks = useTasksSelector(selectAllTasks);

    return (<>
            {!!tasks.length &&
                <Table<typeTasks> body={tasks} head={["name"]}>
                </Table>
            }
        </>
    );
}

export default TasksComponents;