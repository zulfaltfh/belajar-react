import React, { Fragment, useEffect, useRef, useState } from 'react';
import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product.service';

const email = localStorage.getItem('email');

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  },[]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
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

  //useRef

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const totalPriceRef = useRef([null]);

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else{
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
    <Fragment>
      <div className="navbar flex justify-end bg-blue-600 h-10 text-white items-center px-10 py-7">
        {email}
        <Button className="bg-black ml-5" type="submit" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div clas-sName="w-4/6 flex flex-wrap ">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}/>
              <CardProduct.Body name={product.title}>
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
                {products.length > 0 && cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 15)}</td>
                      <td>
                        ${" "}
                        {product.price.toLocaleString('id-ID', {styles:'currency', currency: 'USD'})}
                      </td>
                      <td>{item.qty}</td>
                      <td>Rp {(item.qty * product.price).toLocaleString('id-ID', {styles:'currency', currency: 'USD'})}</td>
                    </tr>
                  );
                })}
                <tr ref={totalPriceRef} className='font-semibold'>
                  <td colSpan={3}>Total Price</td>
                  <td>
                    ${" "}
                    {totalPrice.toLocaleString('id-ID', {styles:'currency', currency: 'USD'})}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </Fragment>
  )
}
