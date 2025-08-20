import React from 'react'
import Link from 'next/link'
import { getProductByCategoryOrName } from '@/services/productService';
import { FilterPageProps } from '@/types/pageProps';
import Card from '@/components/card/Card';
import styles from '../../../styles/PageSearch.module.css'
import Menu from '@/components/menu/Menu';
import Image from 'next/image';

const FilterPage: React.FC<FilterPageProps> = async ({ params }) => {
    const { categoryorname } = params;
    const filteredProducts = await getProductByCategoryOrName(categoryorname);

    return (
        <div>
            <Menu />
            {filteredProducts.length > 0 ? (
                <div className={styles.contCardProduct}>
                    {filteredProducts.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <Card {...product} />
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={styles.noProduct}>
                    <h3>&gt;&gt;&gt; No products found &lt;&lt;&lt;</h3>
                    <Image
                        className={styles.imagenNoProduct}
                        src="/images/noproduct.jpg"
                        alt="No products found"
                        width={1000}
                        height={1000}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            )}
        </div>
    )
}

export default FilterPage
