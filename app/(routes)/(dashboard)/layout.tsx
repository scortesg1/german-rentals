import NavbarDashboard from "./dashboard/components/NavbarDashboard/NavbarDashboard";
import Sidebar from "./dashboard/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full relative">
      <div className="hidden h-full xl:block w-80 fixed">
        <Sidebar />
      </div>
      <div className="h-full w-full xl:ml-80">
        <NavbarDashboard/>
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
