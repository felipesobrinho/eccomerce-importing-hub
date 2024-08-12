import Navbar from "./Navbar";

interface ContentLayoutProps {
  title: string;
  goBack: boolean;
  children: React.ReactNode;
}

export function ContentLayout({ title, goBack, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} goBack={goBack} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}