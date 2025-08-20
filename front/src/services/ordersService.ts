const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getOrders(token:string) {
    try {
        const response = await fetch (`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
        })
        return response.json();
    } catch (error:any) {
        alert("Fallo al registar el usuario" + error)
        throw new Error (error)
    }
}

