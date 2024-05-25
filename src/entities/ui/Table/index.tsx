import type {typeTasks} from "@shared";

interface typePropsTable<T extends typeTasks> {
    body: Array<T>,
    head: Array<string>
}

function Table<T extends typeTasks>(props:typePropsTable<T>) {


    return (<table>
            <thead>
                <tr>
                    {props.head.map((el,index)=><th key={index}>{el as string}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.body.map(row => <tr key={row.id}>
                    {props.head.map((el:string,index:number)=>
                           <td key={index}>{row[el as keyof T] as typeTasks[keyof typeTasks]}</td>
                    )}
                </tr>)
                }
            </tbody>
        </table>
    );
}

export default Table;