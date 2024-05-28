import Product from "./Product"
import { products } from "../data/db"

const ProductList = () => {
  return (
    <>
      {
        products.map(product => (
          <Product key={product.id} {...product} />
        ))
      }
    </>
  )
}

export default ProductList