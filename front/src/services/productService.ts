import { IProduct } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Obtiene todos los productos desde la API
 * @returns Lista de productos (IProduct[])
 */
export async function getProductDB() : Promise<IProduct[]> {
    try {
        const response =  await fetch(`${APIURL}/products`, {
            next: {revalidate:360}
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const products: IProduct[] = await response.json();
        return products;
    } catch (error:any) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error(error);
    }
}

/**
 * Obtiene un producto específico por su ID
 * @param id - ID del producto como string
 * @returns Producto encontrado (IProduct)
 */
export async function getProductByID(id:string) : Promise<IProduct> {
    try {
        const response = await getProductDB();
        const productFiltered = response.find((product) => product.id.toString() === id);
        if(!productFiltered) throw new Error ("Product not found")
        return productFiltered;

    } catch (error:any) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error(error);
    }
}


export async function getProductByCategoryOrName(categoryIdOrName:string) {
    try {
        const response = await getProductDB();

        const cleanedQuery = decodeURIComponent(categoryIdOrName)
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .trim();

        let productFiltered = response.filter((product) => product.categoryId.toString() === cleanedQuery)

        if(!productFiltered.length){
            productFiltered = response.filter((product) => product.name.toLocaleLowerCase().includes(cleanedQuery.toLocaleLowerCase()))

            if(!productFiltered.length){
                productFiltered = [];
            }
        }
        return productFiltered;
    } catch (error: any) {
        throw new Error (error);
    }
}