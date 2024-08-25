/*
-middleware is functions between request and rendering of the root
-before entering to the root you pass through middleware
-you can do as many operations such as authentication and autherization
-This middleware stop every request and do some operations like rendering or redirect to another route
-You have to konw there's something called NextResponse from next/server. 
-What is NextResponse? imagine you go to /about, So you are requesting about and waiting the response from the server
-So the NextResponse is (about)  but wait..... you can change NextResponse if the user is unautherized or the user did a sensitive action
-or the user want to access the dashboard or the user wanted buy something but he has no account so middleware here is useful
-you can change NextResponse and redirect to sign-in page if he isn't authenticated  
*/

import { NextResponse } from "next/server"

/*
you must write middleware correctly
The following function will work every time you route
*/

// export function middleware() {

    // return NextResponse.json({ name: "beso" });   //this code stopped the response every time you route and returned this {"name":"beso"}
    // return NextResponse.next();                   //this code allow you to continue your route with no issue (default behavior)
// }




//============================================================ another case
//Let's say if the user is not logged in so you as a developer you want to redirect him to log-in page how?

/*

const isLoggedIn: boolean = false; // hard code

export function middleware(request:Request) {
    if (!isLoggedIn && request.url==="http://localhost:3002/blog") { //if unautheticated users open blogs ? redirect them to login page
    
        // return NextResponse.redirect("http://localhost:3002/register")
        return NextResponse.redirect(new URL("/register", request.url)) // both codes are working (this line and above)
    
    }
    return NextResponse.next(); //whatever routes are working it will go
}

*/

/*
Notice when I wrote the condition(request.url === "http://localhost:3002/blog")
I can make a config object to know in what routes this middleware will function to verify unauthenticated users
So go to the next example
*/

//============================================================ another case using config which does the same\

/*

const isLoggedIn: boolean = false;
export function middleware(request: Request) {
    if (isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/register", request.url))
}

export const config = {
    matcher:["/blog"], //you can add many routes inside
}

*/

// so in conclusion middleware is important when the users go from public pages to private pages
// so other operations you can do by middleware is catching errors

//============================================================ another case catching cookie


import type { NextRequest } from "next/server" //note import type //only from typescript files //from interface in that file
import { user } from "../lib/data";

// const isLoggedIn: boolean = false;



export function middleware(request: NextRequest) { //we change the Request cuz it made an error so
// let cookie = request.cookies.get("my-cookie") //it made error here but we change the Request to NextRequest
// let headers = new Headers(request.headers) //to catch autherization
// if (user) {
    //     return NextResponse.next()
    // }
    // return NextResponse.redirect(new URL("/register", request.url))
    if (!user) {
        return NextResponse.redirect(new URL("/register", request.url))
    } else {
        console.log(user, "user1")
    return NextResponse.next()
    }
}
    
    export const config = {
        matcher:["/contact"]
    }


// for refreshment, listin to the video => https://www.youtube.com/watch?v=ClY6vD4WHP0
//middleware is not enough to do a notification system