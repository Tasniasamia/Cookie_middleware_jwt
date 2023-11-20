import { SignJWT, jwtVerify } from "jose";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST=async(req,res)=>{
    const data=await req.json();
    const email=data?.email;
    const password=data?.password;
    if(email === "tasniasharin@gmail.com" && password ==="123"){
 console.log(email,password);
 const keyvalue=process.env.API_KEY;
 const payload={email:email,password:password}
 const key=new TextEncoder().encode(keyvalue);
 console.log(key);
 let token=await new SignJWT(payload).setProtectedHeader({alg:'HS256'})
 .setIssuedAt().setIssuer('http://localhost:3000').setExpirationTime('2h').sign(key)
 return NextResponse.json({data:data, token:token},{ headers:{
    'Set-Cookie':`token=${token};Path=/;`
    }})
    }
return NextResponse.json({messgae:"you are fail"})
}

export const GET=async(req,res)=>{
    const token=req.cookies.get("token");
    const key=new TextEncoder().encode(process.env.API_KEY);
    const tokendata=token.value
    const info=await jwtVerify(tokendata,key)
    return NextResponse.json({token:info})
}