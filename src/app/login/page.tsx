"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";



export default function Login(){

    const router = useRouter();
    const [buttonDisabled,setButtonDisabled] = React.useState(true);
    const [user,setUser] = React.useState({
        email: "",
        password:"",
    });
    const [loading,setLoading] = React.useState(false)

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])

    const onLogin = async () => {
        try {
          setLoading(true);
          const response = await axios.post("/api/users/login",user)
          router.push("/");
        } catch (error:any) {
            console.log("login fail")
        } finally{
            setLoading(false)
        }
    }

    return(
        <div className="p-4">
            <p>Login</p>
            <div className="m-3">
                <label className="m-3" htmlFor="email">email</label>
                <input  id={"email"} className="rounded-md p-2 text-black" type="text" value={user.email} onChange={(e)=>{setUser({...user, email: e.target.value})}}></input>
            </div>
            <div className="m-3">
                <label className="m-3" htmlFor="password">password</label>
                <input className="rounded-md p-2" id="userPassword" type="password" value={user.password} onChange={(e)=>{setUser({...user, password: e.target.value})}}></input>
                <button className="p-2 bg-slate-400 block m-2 text-black" onClick={onLogin}>login</button>
                <Link className="p-2 bg-slate-200 m-2 block w-max text-black" href={'./'}>back to home</Link>
            </div>
        </div>
    )
}