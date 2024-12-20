import MobileNavMenu from "./MobileNavMenu";
import SearchBar from "./SearchBar";
import UserNav from "./UserNav";

const Nav = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center gap-2">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <MobileNavMenu />
          <SearchBar />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default Nav;
