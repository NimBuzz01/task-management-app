import Nav from "./nav";
import TaskSheet from "./task-sheet";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="relative overflow-hidden">
      <Nav />
      <div className="container py-8 px-4 sm:px-8 mx-auto">{children}</div>
      <TaskSheet />
    </div>
  );
};

export default ContentLayout;
