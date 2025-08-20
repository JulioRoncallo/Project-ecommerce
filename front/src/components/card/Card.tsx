import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { IProduct } from '@/types'

const Card:React.FC <IProduct>= ({id, name, price, image}) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.contCard} >
            <div className={styles.contImg}>
                <Link href={`/informationProduct/${id}`}>
                <div className={styles.imgWrapper}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="440px"
                        style={{ objectFit: 'contain', borderRadius: '20px' }}
                    />
                </div>
                </Link>
            </div>
            <div className={styles.InfoProduct}>
                <p>
                <strong>{name}</strong>
                <br />
                <strong>${price}</strong>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Card
