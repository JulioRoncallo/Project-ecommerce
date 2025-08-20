
const APIRUL=process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token:string, products:number[]) {
    try {
        const response = await fetch(`${APIRUL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },

            body:JSON.stringify({products})
        })
        if(response.ok){
            alert("La compra se realizó con exito")
            return response.json()
        }else{
            alert("La compra no fue exitosa")
        }
    } catch (error: any) {
        alert("fallo al registar el usuario"+error)
        throw new Error (error)
    }
}