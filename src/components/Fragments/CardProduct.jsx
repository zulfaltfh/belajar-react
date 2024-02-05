import { Link } from 'react-router-dom';
import Button from '../Elements/Button';

export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-72 max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="productImage" className="p-5 rounded-t-lg h-60 w-full object-cover"/>
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="card-body px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white pb-2">
          {name.substring(0,28)} ...
        </h5>
        <p className="text-sm text-white">
          {children.substring(0,100)} ...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { priceProduct, handleAddToCart, id } = props;
  return (
    <div className="card-footer flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white">Rp {priceProduct.toLocaleString('id-ID', {styles:'currency', currency: 'USD'})}</span>
      <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;