import ProductRow from './ProductRow';

function ProductTable(props) {
    const stylehead={
        backgroundColor:"lightgray"
    }
    const styleTable={
        width:"90%"
    }
  return (
   
      <table style={styleTable}>
        <thead >
          <tr style={stylehead}>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {props.products.map((eachProduct) => (
            <ProductRow key={eachProduct.id} product={eachProduct} />
          ))}
        </tbody>
      </table>
    
  );
}

export default ProductTable;
