'use client'
//estilos
import styles from './informationProduct.module.css'
//next
import Image from 'next/image'
//tipos
import { IProduct } from '@/types'
//context
import { useAuth } from '@/context/AuthContext'
//react
import { useState } from 'react'
//iconos
import { CiShoppingCart } from "react-icons/ci";


const InfoProductView: React.FC<IProduct> = ({id,name,image, description, stock, price, categoryId}) => {

        const {userData} = useAuth();
        const [productExit, setProductExit] = useState(false)
        const handleAddToCart = () => {
            if (!userData?.token){
                alert("You must be logger to add products")
            }else{
                const cart = JSON.parse(localStorage.getItem("cart") || "[]");
                const productExist = cart.some((item:any) => {
                    if(item.id === id) return true
                    return false;
                })
                if(productExist){
                    setProductExit(productExist)
                    alert("You already have this product in your cart")
                }else {
                    setProductExit(productExist)
                    cart.push({
                        id,
                        name,
                        image,
                        description,
                        stock,
                        price,
                        categoryId
                    })
                    localStorage.setItem("cart",JSON.stringify(cart))
                    alert("Product add to your cart, ok");
                }
            }
        }

    return (
        <>
            <div className={styles.Message}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est iure molestias sed nam harum illo dolores repellat dolorum eveniet laborum, cumque eos cupiditate? Veritatis ipsa vero magni cumque molestias!</h2>
            </div>

            <div className={styles.contInfoProduct}>
                <div className={styles.contImgProduct}>
                    <div className={styles.imgWrapper}>
                        <Image
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: 'contain'}}
                        />
                    </div>
                </div>
                <div className={styles.contTextProduct}>
                    <h2><strong>{name}</strong></h2>
                    <p>{description}</p>
                    <h2 ><strong>${price}</strong></h2>
                    <h2 ><strong>Stock: {stock}</strong></h2>

                    <button
                        disabled={productExit}
                        className={styles.btnAddCart}
                        onClick={handleAddToCart}
                    ><CiShoppingCart /></button>
                </div>
            </div>
            <div className={styles.contOfe}>
                <div className={styles.contText}>
                    <p>Make Mondays special with our exclusive weekly deals! <br />Every Monday, unlock incredible savings and start your week the right way.</p>
                </div>
                <div className={styles.contPoster}>
                    <Image
                        src="/images/6075128.jpg"
                        alt="poster"
                        width={800}
                        height={400}
                        className={styles.imgPoster}
                    />
                </div>
            </div>
        </>
    )
}

export default InfoProductView
