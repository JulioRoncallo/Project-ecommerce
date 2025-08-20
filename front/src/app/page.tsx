import styles from '../styles/home.module.css'
import Card from '@/components/card/Card';
import Menu from '@/components/menu/Menu';
import Discount from '@/components/discount/Discount';
import Poster from '@/components/posters/Poster';
import { getProductDB } from '@/services/productService';

const images = [
  {src:'/images/poster1.jpg', alt:'Poster 1'},
  {src:'/images/poster4.jpg', alt:'Poster 4'},
  {src:'/images/poster3.jpg', alt:'Poster 3'},
]

export default async function Home() {
  const preloadProducts = await getProductDB();
  return (
    <>
      <div className={styles.welcomeMessage}>
        <p className={styles.messagePremium}>
          Premium Electronics
          <br />
          Select By Experts
        </p>
        <p className={styles.messageCollection}>Discover Our Collection</p>
      </div>

      <Menu/>

      <div className={styles.messageProductos}>
        <h3>Trending Products</h3>
      </div>

      <div className={styles.galery}>
        { preloadProducts.map((product) => {
              return (
                <Card key={product.id} {...product}/>
          )})
        }
      </div>

      <Discount/>

      <Poster images={images}/>
    </>
  );
}

