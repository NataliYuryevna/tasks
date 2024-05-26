interface typeTasks extends Record<string, string|boolean|number>{
    "id": string,
    "name": string,
    "description": string,
    "priority": number
    "completed": boolean,
    "date": string
}

export type typeTaskWithoutId = Omit<typeTasks, 'id'>;
export type typeTaskForAdd = Omit<typeTasks, 'id'|'completed'|'priority'|'date'>
export default typeTasks