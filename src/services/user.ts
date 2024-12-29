import { IRegister, ILogin } from "../types";
import api from "./api";
import {
    useQuery,
    useMutation,
  } from '@tanstack/react-query'

export const useRegisterMutation = ()=>(
    useMutation({
        mutationFn:(data: IRegister)=> api.post('/auth/register', data)
    })
)
export const useLoginMutation = ()=>(
    useMutation({
        mutationFn:(data: ILogin)=> api.post('/auth/login', data)
    })
)
