import { APILoginArgs, IUser } from "@/interfaces/Interfaces"
import { users } from "./MockData"

class ApiAuth{
    isLoginSuccess({email, password}: APILoginArgs){
        // return user with the Auth key
        if(email == "admin@admin.com" && password == "admin"){
           const user = users.find((e)=>e.email==email && e.password==password)
           return {isValid:true, user};
        }
        return {isValid: false, user:null}
    }
    createUser(user:IUser){
        // post data user for API to create a new user
        try{
            const result = users.find(e=>e.email===user.email)
            if (result){
                throw new Error("Email aready used")
            }
            users.push(user)
        }catch(err){
            console.log(err)
            return {message: "Email aready used"}
        }
        console.log(users)
        return {message: "ok", user}
    }
}

const auth = new ApiAuth;

export default auth