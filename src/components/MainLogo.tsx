import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MainLogo = ({ variant = "lg" }: { variant?: "lg" | "sm" }) => {
  return (
    <div className={cn("flex items-center gap-2")}>
      <Image src="/assets/logo/logo.png" alt="logo" width={32} height={32} />
      {variant === "lg" && (
        <Image src="/assets/logo/b2.png" alt="logo" width={100} height={32} />
      )}
    </div>
  );
};

export default MainLogo;
