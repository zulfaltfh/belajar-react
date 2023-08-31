import React, { Fragment, useEffect, useState } from 'react';
import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';

const products = [
  {
    id : 1,
    name : 'Sepatu Nike',
    price : 500000,
    image : '/images/shoes-1.jpg',
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id : 2,
    name : 'Sepatu Adidas',
    price : 435000,
    image : '/images/shoes-1.jpg',
    description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aliquam eum ex eius ratione, officia cumque assumenda harum ea suscipit veritatis, aspernatur voluptatum! Hic veritatis qui ipsa totam libero earum!'
  },
  {
    id : 3,
    name : 'Sepatu Bata',
    price : 125000,
    image : '/images/shoes-1.jpg',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iure inventore odit vero laudantium esse at dolores veritatis voluptates fuga omnis reprehenderit distinctio, necessitatibus quidem. Nobis non expedita quibusdam dolore.'
  },
];

const email = localStorage.getItem('email');

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  const handleAddToCart = (id) => {
    if(cart.find(item => item.id === id)){
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1} : item )
      );
    } else {
      setCart([...cart, {id, qty: 1}]);
    }
  };

  return (
    <Fragment>
      <div className="navbar flex justify-end bg-blue-600 h-10 text-white items-center px-10 py-7">
        {email}
        <Button className="bg-black ml-5" type="submit" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}/>
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer priceProduct={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
            <h1 className="text-xl font-bold text-blue-700 ml-5 mb-2">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>
                        Rp{" "}
                        {product.price.toLocaleString('id-ID', {styles:'currency', currency: 'IDR'})}
                      </td>
                      <td>{item.qty}</td>
                      <td>Rp {(item.qty * product.price).toLocaleString('id-ID', {styles:'currency', currency: 'IDR'})}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3}>Total Price</td>
                  <td>
                    Rp{" "}
                    {totalPrice.toLocaleString('id-ID', {styles:'currency', currency: 'IDR'})}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </Fragment>
  )
}
