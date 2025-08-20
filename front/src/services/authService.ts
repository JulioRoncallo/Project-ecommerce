import { ILoginProps, IRegisterPayload } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData:IRegisterPayload) {
    try {

        const response = await fetch(`${APIURL}/users/register`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        const parsedResponse = await response.json()

        if(parsedResponse.name){
            alert("User registered successfully")
            return parsedResponse;
        } else {
            alert("User registration failed")
        }

    } catch (error:any) {
        alert("User registration failed" + error)
        throw new Error(error);
    }
}

export async function login(userData:ILoginProps) {
    try {

        const response = await fetch(`${APIURL}/users/login`,{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        const parsedResponse = await response.json();
        if(parsedResponse.login){
            alert("User logged in successfully")
            return parsedResponse;
        } else {
            alert("User login failed")
        }

    } catch (error:any) {
        alert ("User login failed " + error)
        throw new Error (error)
    }
}