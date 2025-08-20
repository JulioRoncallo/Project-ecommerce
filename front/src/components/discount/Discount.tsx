import React from 'react'
import styles from './discount.module.css'

const Discount = () => {
    return (
        <div className={styles.contDiscount}>
            <div className={styles.discountOne}>
                <h2>¡IRRESISTIBLE OFFERS TODAY ONLY!</h2>
                <p> Up to 50% off technology
                    <br />
                    Upgrade your equipment at the best price. Limited stock, so hurry before it runs out!
                </p>
            </div>
            <div className={styles.discounTwo}>
                <h2>¡Log in, add to cart and receive your product!</h2>
            </div>
        </div>
    )
}

export default Discount
