"use client"
import { userContext } from "@/context/UserContext";
import auth from "@/services/api/ApiAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Close, Dangerous } from "@mui/icons-material";
import { Alert, Button, Input, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"



const signInSchrema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is necessary").email("Email is not valid"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required")
}).refine((data)=> data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"]
})

type signInFormData = z.infer<typeof signInSchrema>

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<signInFormData>({
        resolver: zodResolver(signInSchrema)
    });

    // @ts-ignore
    const {setUser} = useContext(userContext)
    const [msgErro, setMsgErro] = useState("")
    const router = useRouter()
    const submitHandle: SubmitHandler<signInFormData> = (data) => {
       const result = auth.createUser({name:data.name, email:data.email, password:data.password})
        if(result.message == "ok"){
            setUser(result.user)
            router.push("/home")
            return
        }
        setMsgErro(result.message)
    }

    return (
        <div className="flex flex-col  items-center justify-center bg-primary w-screen h-screen">
            {
                msgErro && <Alert variant="filled" color="error" className="absolute  top-10" action={<Close onClick={()=>setMsgErro("")}></Close>}>
                    {msgErro}
                </Alert>
            }
            <h1 className="text-4xl pb-10">Sign-in</h1>
            <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col items-center gap-5">
                <TextField variant="filled" color="primary" label="name" className="bg-whiteColor min-w-96" error={errors.name ? true : false}
                    helperText={errors.name?.message}
                    {...register("name")}
                >
                    <Input color="primary" />
                </TextField>

                <TextField variant="filled" color="primary" label="email" className="bg-whiteColor min-w-96" type="email" error={errors.email ? true : false}
                    helperText={errors.email?.message}
                    {...register("email")}>
                    <Input color="primary" />
                </TextField>

                <TextField variant="filled" color="primary" label="password" className="bg-whiteColor min-w-96" type="password"
                    error={errors.password ? true : false}
                    helperText={errors.password?.message}
                    {...register("password")}
                >
                    <Input color="primary" />
                </TextField>

                <TextField variant="filled" color="primary" label="password confirm" className="bg-whiteColor min-w-96" type="password"
                    error={errors.confirmPassword ? true : false}
                    helperText={errors.confirmPassword?.message}
                    {...register("confirmPassword")} >
                    <Input color="primary" />
                </TextField>

                <Button type="submit" variant="contained" color="success" className="w-full">
                    Sign-in
                </Button>
            </form>
        </div>
    )
}