"use client"

import { InputsLogin } from "@/interfaces/Interfaces"
import { SubmitHandler, useForm } from "react-hook-form"

export default function Login(){
    const {register, handleSubmit} = useForm<InputsLogin>()

    const submiteHandle: SubmitHandler<InputsLogin> = ()=>{

    }

    return <div className="bg-primary">
        <form onSubmit={handleSubmit(submiteHandle)}>
            <input type="text" {... register("email", {required: true, deps:"email"})} />
            <input type="text" {... register("password", {required: true, deps: "password"})} />
        </form>

    </div>
}