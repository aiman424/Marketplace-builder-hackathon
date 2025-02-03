import { client, urlFor } from '@/sanity/lib/client'
import React from 'react'
import ProductDetail from '@/components/ProductDetail';

type Product = {
    category: string;
    dimensions: string;
    features: string;
    quantity: number;
    _id: string;
    name: string;
    description: string;
    price: number;
    image: {
        asset: {
            _ref: string;
        };
    }
  };

const page = async ({params:{id}}:{params:{id:string}}) => {
    const query = `*[_type == 'product' && _id == $id]{
    name,
    price,
    description, 
    "category":category._ref,  
    "image":image.asset._ref,
    "id":_id,
    }[0]`
    
    const products:Product | null = await client.fetch(query , {id})
    if(!products){
        return (
            <div>
                <h1>"Product not found"</h1>
            </div>
        )
    }
    return (
        <ProductDetail product={products}/>)
}
export default page
