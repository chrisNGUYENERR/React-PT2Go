import { configureStore } from '@reduxjs/toolkit'
import { loginMiddleware } from '../middlewares/loginMiddleware'
import loginReducer from './reducers/loginReducer'

export const store = configureStore({
    reducer:{
        loginState : loginReducer,
    },
    middleware:[
        loginMiddleware
    ]
}) 
