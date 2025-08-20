'use client'
//context
import { useAuth } from '@/context/AuthContext'
//servicios
import { getOrders } from '@/services/ordersService';
//tipos
import { IOrder } from '@/types';
//react
import React, { useEffect, useState } from 'react'
//estilos
import styles from './orderViews.module.css'
//next
import Image from 'next/image';


const OrdersViews = () => {
    const {userData} = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);

    const handleGetOrders = async () => {
        if(userData?.token){
            const response = await getOrders(userData?.token)
            setOrders(response)
        }
    }

    useEffect(() => {
        handleGetOrders();
    }, [userData])


    return (
        <>
            <div className={styles.contOrderViews}>
                {orders.length ?
                    orders.map((order) =>{
                        return (
                            <div key={order.id}>
                                <p style={{ fontWeight: 'bold' }}>
                                    Date Order: {new Date(order.date).toDateString()}
                                </p>
                                <p>
                                    Status:{" "}
                                    <span style={{ color: order.status === "approved" ? "green" : "red",
                                                fontWeight:"bold"
                                    }}>
                                        {order.status}
                                    </span>
                                </p>
                                {order.products.map((product) => {
                                    return(
                                        <div key={product.id}>
                                            {product.name}
                                            <br/>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }) : (
                        <div>You dont have orders</div>
                    )}
            </div>
            <div className={styles.contMessage}>
                <h3>Remember that the more orders you make, <br />
                the more benefits you can earn on special dates.</h3>
            </div>
            <div className={styles.poster}>
                <Image
                    className={styles.imagen}
                    src="/images/regalo.jpg"
                    alt="regalos"
                    width={0}
                    height={0}
                    sizes="50vw"
                    style={{
                    width: '60%',
                    height: '80%',
                    objectFit: 'cover',
                    borderRadius: '20px'
                    }}
                />
            </div>
        </>
    )
}

export default OrdersViews
