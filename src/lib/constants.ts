import {
  House,
  ListChecks,
  ChartLine,
  Lightbulb,
  Bell,
  Settings,
} from "lucide-react";

export const menuList = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/tasks",
    label: "Tasks",
    icon: ListChecks,
  },
  {
    href: "/report",
    label: "Report",
    icon: ChartLine,
  },
  {
    href: "/insights",
    label: "Insights",
    icon: Lightbulb,
  },
  {
    href: "/inbox",
    label: "Inbox",
    icon: Bell,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];
