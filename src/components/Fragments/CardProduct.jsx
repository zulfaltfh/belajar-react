import React, { Children } from 'react'
import Button from '../Elements/Button';

export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-80 max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="p-5">
      <img src={image} alt="productImage" />
    </div>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="card-body px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white pb-2">
          {title}
        </h5>
        <p className="text-sm text-white">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { priceProduct } = props;
  return (
    <div className="card-footer flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{priceProduct}</span>
      <Button className="bg-blue-600">Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;