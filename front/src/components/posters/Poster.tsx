'use client'
import React from 'react'
import styles from './poster.module.css'
import Image from 'next/image'

interface PosterProps{
    images:{
        src:string
        alt:string
    }[]
}

const Poster: React.FC<PosterProps> = ({images}) => {
    return (
        <div className={styles.contPosters}>
            {images.map((img, index) =>
            <Image
                key={index}
                src={img.src}
                alt={img.alt}
                className={styles.posterImg}
                width={300}
                height={500}
            />
        )}
        </div>
    )
}

export default Poster
