//ProductTab.jsx

import Product from './Product.jsx';

let styles ={
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  alignItem:'center',
  
}
function ProductTab() {
  return (
    <div style={styles}>
         <Product title="Logitech MX Master" idx={0} />
         <Product title="Pencil (2nd Gen)" idx={1} />
         <Product title="Zeb—t ransforier" idx={2} />
         <Product title="Potornics Toad 23" idx={3} />

    </div>
  );
}


export default ProductTab;