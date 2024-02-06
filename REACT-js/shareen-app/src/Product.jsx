//Product.jsx

import './App.css';
import './product.css';
import Price from './price.jsx';

function Product({ title,idx}) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
let newPrices = ["8,999", "9,199", "799", "278"];
let description = [
  "8,000 DPI",
  "intuitive surface",
  "designed for iPad Pro",
  "wireless"
];

  return (
    
    <div className='Product'>
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <p>{description[idx]}</p>
      <Price oldp={oldPrices[idx]} newp={newPrices[idx]} />
    
    </div>
  );
}

export default Product;
