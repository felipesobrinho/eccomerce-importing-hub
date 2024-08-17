import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb"

import { ContentLayout } from "./components/content-layout";
import Image from "next/image";
import HomeCard from "./components/home-card";
import { getHomeCardList } from "@/lib/home-card-list";

export default async function Home() {
  const homeCardList = getHomeCardList();

  return (
    <ContentLayout title="Home" goBack={false}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">General</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col justify-center items-center mt-10 gap-10">

        <h1 className="my-8 flex items-center gap-2 font-bold text-lg whitespace-nowrap" >
          <Image src="/icon.png" width={48} height={48} color="white" alt="Logo" />
          Importing Hub
        </h1>

        {homeCardList.cards?.map((card, index) => (
            <HomeCard key={index} title={card.title} description={card.description || ''} submenu={card.submenu}/>
        ))}
        

      </div>
    </ContentLayout>
  );
}
