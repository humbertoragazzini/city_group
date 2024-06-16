import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest){
    try {
        
        const requestBody = await request.json()
        const {email,password} = requestBody;
        console.log(requestBody)

        // check if the user exist
        const user = await User.findOne({email});

        // If user
        if(!user){
            return NextResponse.json({error:'User not found'},{status:400})
        }
        
        // if password is ok
        const validPassword = await bcryptjs.compare(password, user.password)

        console.log(validPassword)

        if(!validPassword){
            return NextResponse.json({error: 'password not valid'},{status:400})
        }else{
            console.log('password valid')
        }

        // create token data
        const tokenData = {
            id: user._id,
            email: user.email,
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1h"})

        // now we are going to put this token to the cookies 
        const response =  NextResponse.json({
            message:'User created successfully',
            success:true
        })

        // now we can send it to the cookies
        response.cookies.set("token",token,{httpOnly: true})

        return response
        
    } catch (error: any) {
        // return NextResponse.json({error: error.message},{status: 500})  
    }
}