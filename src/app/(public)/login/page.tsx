"use client"

import { InputsLogin } from "@/interfaces/Interfaces"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import {z} from "zod"

const loginFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Email is not valid"),
    password: z.string().min(3, "Password needs a minimum of 6 characters")
})


type loginFormData = z.infer<typeof loginFormSchema>


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    const submiteHandle: SubmitHandler<InputsLogin> = (data) => {
        if (data.email == "admin@admin.com" && data.password == "admin") {
            const user = JSON.stringify(data, null, 2)
            console.log(user)
        }
    }

    return (
        <div className="flex flex-1 p-20 flex-col min-h-full bg-primary items-center justify-center">
            <h1 className="mb-20 text-5xl">Login</h1>
            <form action={"/home"} method="post" onSubmit={handleSubmit(submiteHandle)} className="flex flex-1 flex-col gap-10 w-full max-w-96">

                <input type="text" 
                {...register("email", { required: true, deps: "email" })}
                aria-invalid={errors?.email ? "true" : "false"}
                className="pl-2 h-10" 
                placeholder="Email" />
                {errors.email && <span>{errors.email.message}</span>}

                <input type="password"
                {...register("password", { required: true, deps: "password" })}
                aria-invalid={errors?.email ? "true" : "false"}   
                className="pl-2 h-10" 
                placeholder="Password" />
                {errors.password && <span>{errors.password.message}</span>}


                <input type="submit" value="Login"  className="text-whiteColor bg-success h-10 hover:bg-opacity-85 cursor-pointer" />
            </form>
        </div>)
}