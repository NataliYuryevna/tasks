interface typeTasks {
    "id": string,
    "name": string,
    "description": string,
    "priority": number
    "completed": boolean
}

export type typeTaskWithoutId = Omit<typeTasks, 'id'>;
export type typeTaskForAdd = Omit<typeTasks, 'id'|'completed'|'priority'>
export default typeTasks