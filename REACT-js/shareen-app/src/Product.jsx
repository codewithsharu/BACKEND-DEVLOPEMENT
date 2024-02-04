//Product.jsx

import './App.css';
import Price from './price.jsx';

function Product({ title}) {
  return (
    <div className='Product'>
      <h4>{title}</h4>
      <p>Description</p>
      <Price oldp="123" newp="345" />
    
    </div>
  );
}

export default Product;
