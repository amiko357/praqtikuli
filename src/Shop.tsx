import React from "react"
import { useEffect, useState } from "react"
import ShopCard from "./ShopCard"

interface Product {
  id: number
  title: string
  image: string
  description: string
  price: number
}


function Shop() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function getProducts(){
            const resp = await fetch("https://fakestoreapi.com/products").then(r => r.json())
            setProducts(resp)
        }

        getProducts()
    }, [])
    return (
      <div className="card-list">
          {products.map(product => (
            <ShopCard product={product} key={product.id}/>
          ))}
      </div>
    )
}
  
export default Shop