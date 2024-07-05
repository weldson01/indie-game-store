"use client"

import { userContext } from "@/context/UserContext"
import auth from "@/services/api/ApiAuth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Close, Dangerous } from "@mui/icons-material"
import { Alert, Slide } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const loginFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Email is not valid"),
    password: z.string().min(3, "Password needs a minimum of 6 characters")
})


type loginFormData = z.infer<typeof loginFormSchema>


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema)
    })
    const router = useRouter()
    const [bannerErro, setBannerErro] = useState(false)
    // @ts-ignore
    const { setUser } = useContext(userContext)

    const submiteHandle: SubmitHandler<loginFormData> = (data) => {
        console.log(data);
        const result = auth.isLoginSuccess({ email: data.email, password: data.password })
        if (result.isValid) {
            setUser(result.user)
            router.push("/home")
        } else {
            setBannerErro(true)
        }
    }

    return (
        <div className="flex flex-1 p-20 flex-col min-h-full bg-primary items-center justify-center">
            {
                bannerErro &&
                <Slide direction="up" mountOnEnter unmountOnExit in>
                    <Alert variant="filled" severity="error" icon={<Dangerous color="error" />} className="fixed bottom-20 animate-pulse" action={<Close onClick={() => setBannerErro(false)} className="hover:cursor-pointer" />}>
                        The email or password is wrong try again...
                    </Alert>
                </Slide>
            }
            <h1 className="mb-20 text-5xl">Login</h1>
            <form action={"/home"} method="post" onSubmit={handleSubmit(submiteHandle)} className="flex flex-1 flex-col gap-10 w-full max-w-96">
                <div className="flex flex-col">
                    {errors.email && <span className="text-sm text-red">{errors.email.message}</span>}

                    <input type="text"
                        {...register("email", { required: true, deps: "email" })}
                        aria-invalid={errors?.email ? "true" : "false"}
                        className="text-primary pl-2 h-10"
                        placeholder="Email"

                    />

                </div>

                <div className="flex flex-col">
                    {errors.password && <span className="text-nowrap text-sm text-red">{errors.password.message}</span>}

                    <input type="password"
                        {...register("password", { required: true, deps: "password" })}
                        aria-invalid={errors?.email ? "true" : "false"}
                        className="text-primary pl-2 h-10"
                        placeholder="Password" />
                </div>

                <input type="submit" value="Login" className="text-whiteColor bg-success h-10 hover:bg-opacity-85 cursor-pointer" />
                <Link href="/sign-in" className="underline hover:no-underline hover:animate-pulse text-center">Create an account</Link>
            </form>
        </div>)
}