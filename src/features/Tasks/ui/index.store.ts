import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../lib"
import {useDispatch} from "react-redux";
//import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    /*middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger)*/
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()