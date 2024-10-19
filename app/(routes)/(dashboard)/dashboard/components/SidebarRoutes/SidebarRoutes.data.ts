import { Calendar, CalendarCheck, Car, Heart, Settings } from "lucide-react";

export const generalSidebarData = [
  { icon: Car, label: "Cars", href: "/dashboard" },
  { icon: Calendar, label: "Reservations", href: "/reservations" },
  { icon: Heart, label: "Favorites", href: "/favorites" },
];

export const adminSidebarData = [
  { icon: Settings, label: "Manage cars", href: "/dashboard/admin/manage" },
  { icon: CalendarCheck, label: "All reservations", href: "/dashboard/admin/all-reservations" },
];
