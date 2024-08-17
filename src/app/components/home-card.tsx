import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

type SubMenu = {
  title: string;
  description: string;
};

type HomeCardProps = {
  title: string;
  description: string;
  submenu?: SubMenu[];
};

export default function HomeCard({ title, description, submenu }: HomeCardProps) {
  return (
    <>
      {submenu ? (
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle> {title} </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-96">
              {submenu.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            {description}
          </CardContent>
        </Card>
      )}
    </>
  );
}
