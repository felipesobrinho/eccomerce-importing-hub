import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb"
import fetchProducts from "../actions";
import Product from "../components/Product";
import { ContentLayout } from "../components/ContentLayout";

export default async function Loja() {
  const products = await fetchProducts();
  
  return (
   <div className="w-full flex flex-col items-center justify-center">
    <ContentLayout title="Home">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">General</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Loja</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-10 xl:gap-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mx-10 pt-10">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </ContentLayout>
      
   </div>
  );
}
