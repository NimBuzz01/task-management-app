import { LucideIcon } from "lucide-react";
import React from "react";

const LabelBadge = ({ label, icon }: { label: string; icon: LucideIcon }) => {
  const Icon = icon;

  return (
    <div className="flex items-center gap-3 text-custom-dark-300">
      <Icon className="w-5 h-5" />
      <p className="body-b1">{label}</p>
    </div>
  );
};

export default LabelBadge;
