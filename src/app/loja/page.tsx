import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb"
import { ContentLayout } from "../components/ContentLayout";
import ProductsList from "../components/ProductsList";
import fetchProducts from "../actions";
import SearchInput from "../components/SearchInput";

export default async function Loja({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const products = await fetchProducts(query);

  return (
    <ContentLayout title="Home" goBack={true}>
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

      <SearchInput />
      <ProductsList products={products} />
    </ContentLayout>
  );
}
