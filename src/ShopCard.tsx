import React from "react"
import { useState } from 'react'

interface Product {
  id: number
  title: string
  image: string
  description: string
  price: number
}

function ShopCard({product}: {product: Product}) {

  return (
    <div className="card">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <span>{product.price} $</span>
    </div>
  )
}

export default ShopCard