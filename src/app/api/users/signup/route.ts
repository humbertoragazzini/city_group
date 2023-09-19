import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest){
    try {
        const requestBody = await request.json();
        const {username,email,password} = requestBody;

        // // check if user already exist
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error:"User already exists"},{status:400});
        }

        // hashing of the password
        var salt = await bcryptjs.genSaltSync(10);
        var hashedPassword = await bcryptjs.hash(password,salt);


        // create new user to be saved
        const newUser = await new User({username,email,password: hashedPassword}).save();

        // send response
        return NextResponse.json({
            message:'User created successfully',
            success:true,
            newUser
        })

    } catch (error: any) {
        console.log('error catch 2')
        return NextResponse.json({error: error.message},{status:500})
    }
}
 
