
import allProducts from "../data.json"
import { useState } from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function Productspage() {
  const [products,setProducts]=useState(allProducts)
  const [searchInput,setSearchInput]=useState("")

  

  return (
    <div>
    <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
    <ProductTable key={"productTable"} products={products.filter((eachProduct)=>
        eachProduct.name.toLowerCase().includes(searchInput.toLowerCase())
    )}/>
      
    </div>
  )
}

export default Productspage