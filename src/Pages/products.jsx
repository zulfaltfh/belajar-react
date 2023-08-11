import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'


export default function ProductsPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"/>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit tempora non aperiam, ea quidem dolores veritatis necessitatibus. Corporis alias ratione ipsam voluptate dolorum dignissimos velit delectus incidunt rerum ex.
        </CardProduct.Body>
        <CardProduct.Footer priceProduct="Rp240.000"/>
      </CardProduct>
    </div>
  )
}
