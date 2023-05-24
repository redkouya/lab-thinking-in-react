import allProducts from '../data.json';
import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function Productspage() {
  const [products, setProducts] = useState(allProducts);
  const [searchInput, setSearchInput] = useState('');
  const [checkInput,setCheckInput]=useState(false)

  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} checkInput={checkInput} setCheckInput={setCheckInput} />
      <ProductTable
        key={'productTable'}
        products={products.filter((eachProduct) =>
          checkInput ? eachProduct.name.toLowerCase().includes(searchInput.toLowerCase()) && eachProduct.inStock:eachProduct.name.toLowerCase().includes(searchInput.toLowerCase()) 
          
          
        )}
      />
    </div>
  );
}

export default Productspage;
