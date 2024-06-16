"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";



export default function SignUp(){

    const router = useRouter();

    const [user,setUser] = React.useState({
        name: "",
        surname: "",
        username:"",
        password:"",
        email:"",
        country:"",
        state:"",
        city:"",
        phone:"",
        comment: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [loading,setLoading] = React.useState(false);

    const onSignup =async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup',user)
            router.push("/login");

        } catch (error:any) {
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user])

    return(
        <div className="p-4">
            <h1>{loading ? 'please wait' : 'SignUP screen'}</h1>
            <p>
                signup
            </p>
            <div className="m-3">
            <label className="m-3" htmlFor="username">username</label>
            <input
                className="rounded-md p-2 text-black"
                id="usernameInput"
                type="text"
                value={user.username}
                onChange={
                    (e)=>{
                        setUser({...user, username: e.target.value})
                    }
                }
            ></input>
            </div>
            <div className="m-3">
            <label className="m-3" htmlFor="email">email</label>
            <input
                className="rounded-md p-2 text-black"
                id="userEmailnput"
                type="email"
                value={user.email}
                onChange={
                    (e)=>{
                        setUser({...user, email: e.target.value})
                    }
                }
            ></input>
            </div>
            <div className="m-3">
            <label className="m-3" htmlFor="username">password</label>
            <input
                className="rounded-md p-2 text-black"
                id="userPassword"
                type="password"
                value={user.password}
                onChange={
                    (e)=>{
                        setUser({...user, password: e.target.value})
                    }
                }
            ></input>
            <button className="p-2 bg-slate-400 block m-2" onClick={onSignup}>
                {buttonDisabled ? "Please fill the form" : "SignUp Now!"}
            </button>
            <Link className="p-2 bg-slate-200 m-2 block w-max text-slate-950" href={'./'}>back to home</Link>
            <Link className="p-2 bg-slate-200 m-2 block w-max text-slate-950" href={'./login'}>Login</Link>
            </div>
        </div>
    )
}