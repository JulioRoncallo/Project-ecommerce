import React from 'react';
import { getProductByID } from '@/services/productService';
import InfoProductView from '@/views/infoProductView/InfoProductView'

interface ProductPageProps{
   params: {
      id: string
   }
}

const InfoProduct = async({params}: ProductPageProps) => {
   const productDetail = await getProductByID(params.id);
   return(
      <InfoProductView {...productDetail}/>
   )
}

export default InfoProduct
