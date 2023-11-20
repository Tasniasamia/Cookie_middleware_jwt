import { NextResponse } from "next/server";

export const middleware=(req,res)=>{
    if (req.nextUrl.pathname.startsWith('/api/ProductsAll')) {
        console.log("this is middleware");
        const headerlist = new Headers(req.headers);
        headerlist.set("name","something");
        headerlist.set("twins","ksk");
        return NextResponse.next({
            request:{headers:headerlist}
        })
    }
}