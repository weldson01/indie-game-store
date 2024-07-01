import { APILoginArgs, IUser } from "@/interfaces/Interfaces"
import { users } from "./MockData"

class ApiAuth{
    isLoginSuccess({email, password}: APILoginArgs){
        // return user with the Auth key
        if(email == "admin@admin.com" && password == "admin"){
           return {isValid: true, authKey:"A.B.C123" , user:{email, name: "Carl", imageUri: "https://pbs.twimg.com/profile_images/1410085780337405959/eQTpu4l0_400x400.jpg"}}
        }
        return {isValid: false, user:null}
    }
    createUser(user:IUser){
        // post data user for API to create a new user
        try{
            users.push(user)

        }catch(err){
            console.log(err)
            return {message: "There's something wrong"}
        }
        console.log(users)
        return {message: "ok", user}
    }
}

const auth = new ApiAuth;

export default auth