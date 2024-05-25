import useSWR from "swr"
import { fetcher } from "../helpers/fetcher"
import Product from "./Product"

const ProductList = () => {
    const {data, error} = useSWR("https://my-json-server.typicode.com/Kuanishbayev/unify-food-ordering/products", fetcher)
  return (
    <>
        {!data ? (
            <p>Loading...</p>
        ) : (
            data.map(product => (
              <Product key={product.id} {...product} />
            ))
        )
        }
    </>
  )
}

export default ProductList