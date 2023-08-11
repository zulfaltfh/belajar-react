import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'

const products = [
  {
    id : 1,
    name : 'Sepatu Nike',
    price : 'Rp500.000',
    image : '/images/shoes-1.jpg',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id : 2,
    name : 'Sepatu Adidas',
    price : 'Rp435.000',
    image : '/images/shoes-1.jpg',
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aliquam eum ex eius ratione, officia cumque assumenda harum ea suscipit veritatis, aspernatur voluptatum! Hic veritatis qui ipsa totam libero earum!'
  },
  {
    id : 3,
    name : 'Sepatu Bata',
    price : 'Rp125.000',
    image : '/images/shoes-1.jpg',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iure inventore odit vero laudantium esse at dolores veritatis voluptates fuga omnis reprehenderit distinctio, necessitatibus quidem. Nobis non expedita quibusdam dolore.'
  },
];

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image}/>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer priceProduct={product.price}/>
        </CardProduct>
      ))}
    </div>
  )
}
