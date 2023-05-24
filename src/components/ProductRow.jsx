
function ProductRow({product:{name,price}}) {
  return (
    <tr><td>{name}</td>
    <td>{price}</td></tr>
  )
}

export default ProductRow