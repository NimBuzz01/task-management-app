import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <Input className="pl-9 md:w-[300px]" placeholder="Search tasks" />
      <Search className="absolute left-0 top-0 m-2.5 h-4 w-4" />
    </div>
  );
};

export default SearchBar;
