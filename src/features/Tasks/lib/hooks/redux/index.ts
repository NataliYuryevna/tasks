import {useSelector} from 'react-redux'
import type {typeTasks} from "@shared";
export const useTasksSelector = useSelector.withTypes<{ tasks: typeTasks[] }>();
//export const useAppStore = useStore.withTypes<AppStore>()

