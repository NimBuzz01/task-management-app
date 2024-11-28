import Nav from "./nav";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div>
      <Nav />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
};

export default ContentLayout;
