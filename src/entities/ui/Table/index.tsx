import type {typeTasks} from "@shared";
import {useTaskContext} from "./task.context";
import {Table, Td, Th, Tr} from './index.style'

interface typePropsTable<T extends typeTasks> {
    body: Array<T>,
    head: Array<string>
}

function MyTable<T extends typeTasks>(props:typePropsTable<T>) {

    const {onClickTask} = useTaskContext();

    return (<Table>
            <thead>
                <Tr $classTr={'head'}>
                    {props.head.map((el,index)=><Th key={index}>{el as string}</Th>)}
                </Tr>
            </thead>
            <tbody>
                {props.body.map(row => <Tr key={row.id}>
                    {props.head.map((el:string,index:number)=>
                           <Td key={index} onDoubleClick={()=>onClickTask(row)}>{row[el as keyof T] as typeTasks[keyof typeTasks]}</Td>
                    )}
                </Tr>)
                }
            </tbody>
        </Table>
    );
}

export default MyTable;