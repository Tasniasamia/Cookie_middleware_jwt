import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";

export async function POST(req, res) {
   const allData=await req.json();
   
   const cookiesdata=req.cookies.get("Cookie2")

   console.log(allData);
    return NextResponse.json({ allData,cookiesdata:cookiesdata});
}

export async function GET(req,res){
  const data=headers();
 const name= data.get("name");
 const twin=data.get("twins");
 console.log(name , twin);
  // const data=await req.json();
  // console.log(data);
  const cookiesdata=req.cookies.get("Cookie2")
  
  return NextResponse.json({ data:cookiesdata,name:name,twin:twin});

}
export async function PUT(req,res){
  // const headerlist=headers();
  const dataall=await req.json()
  return NextResponse.json({data:dataall},{status:200,
    headers:{
      'token':"ABC-123",
      "Set-Cookie":`Auth=23432-XDE; Path=/;`,
      "token2":"Tas-21323",
      'datatoke':"key"
    }})
}