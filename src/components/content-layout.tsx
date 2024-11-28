import Nav from "./nav";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div>
      <Nav />
      <div className="container py-8 px-4 sm:px-8 mx-auto">{children}</div>
    </div>
  );
};

export default ContentLayout;
