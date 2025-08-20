'use client'
//react
import React, { useEffect, useState } from 'react'
//estilos
import styles from  './shoppingCartView.module.css'
//tipos
import { IProduct } from '@/types';
//context
import { useAuth } from '@/context/AuthContext';
//servicios
import { createOrder } from '@/services/orderServices';
//iconos 
import { MdDeleteOutline } from "react-icons/md";


const ShoppingCartView = () => {
    const {userData} = useAuth();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [totalCart, setTotalCart] = useState<number>(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        if(storedCart){
            let totalPrice = 0;
            storedCart.map((product: IProduct) => {
                totalPrice = totalPrice + Number(product.price);
            })
            setTotalCart(totalPrice)
            setCart(storedCart)
        }
    }, [])

    const handleCheckout = async () => {
        if(userData?.token){
            const idProducts = cart.map((products) => products.id);
            await createOrder(userData?.token, idProducts);
            localStorage.setItem("cart", "[]")
            setCart([])
            setTotalCart(0)
        }
    }

    const handleDelete = (id:number) => {
        const cart:IProduct[] | [] = JSON.parse(localStorage.getItem("cart") || "[]");
        const filteredCart = cart.filter((product: IProduct) => product.id != id);

        localStorage.setItem("cart", JSON.stringify(filteredCart));
        setCart(filteredCart)

        // 🔹 Recalcular total
        const newTotal = filteredCart.reduce((acc, product) => acc + Number(product.price), 0);
        setTotalCart(newTotal);
    }

    return (
        <>
            <div className={styles.Message}>
                <h1>Thank you for trusting us. Your next purchase is just a click away!</h1>
            </div>
            <div className={styles.contShopping}>
                <div className={styles.contCart}>
                    <h2>Shopping Cart</h2>
                    <div className={styles.contInfoCart}>
                        { cart.length ? cart.map((product) => {
                                return(
                                    <div className={styles.itemCart} key={product.id}>
                                        <p>{product.name}</p>
                                        <p>${product.price}</p>
                                        <button onClick={() => handleDelete(product.id)}><MdDeleteOutline size={24} color='red' /></button>
                                    </div>
                                )
                            }) : (
                                <div className={styles.MessageNoProducts}>
                                    <h2>No tienes products agregados al carrito </h2>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={styles.contTotalBtn}>
                    <p>Total: ${totalCart}</p>
                    <button className={styles.button} onClick={handleCheckout}>Buy</button>
                </div>

            </div>
        </>
    )
}

export default ShoppingCartView
