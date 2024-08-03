import Product from "./components/Product";
import fetchProducts from "./actions";

export default async function Home() {
  const products = await fetchProducts();
  
  return (
   <div className="max-w-7xl h-full mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-responsive gap-10 xl:gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
   </div>
  );
}
