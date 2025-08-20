import { NextResponse, NextRequest } from "next/server";

//proteccion de rutas
export function middleware(request:NextRequest) {
    const {pathname} = request.nextUrl;

    if ((pathname === "/dashboard" || pathname === "/shoppingCart" ) && !request.cookies.get("userSession")?.value){
        return NextResponse.redirect(new URL('/login', request.url))
    }else if((pathname === "/register" || pathname === "/login") && request.cookies.get("userSession")?.value){
        return NextResponse.redirect(new URL('/', request.url))
    }else{
        return NextResponse.next();
    }
}
