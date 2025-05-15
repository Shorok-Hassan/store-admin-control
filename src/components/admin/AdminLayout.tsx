
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  Home, 
  Settings, 
  Package, 
  Users, 
  ShoppingBag, 
  LayoutDashboard, 
  Menu, 
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { name: "لوحة التحكم", path: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "المنتجات", path: "/admin/products", icon: <Package size={20} /> },
  { name: "المستخدمين", path: "/admin/users", icon: <Users size={20} /> },
  { name: "الطلبات", path: "/admin/orders", icon: <ShoppingBag size={20} /> },
  { name: "الإعدادات", path: "/admin/settings", icon: <Settings size={20} /> },
  { name: "العودة للمتجر", path: "/", icon: <Home size={20} /> },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-admin-light overflow-hidden" dir="rtl">
      {/* Mobile sidebar toggle button */}
      <Button
        variant="ghost"
        className="lg:hidden fixed top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "bg-admin-dark text-white w-64 shrink-0 overflow-y-auto transition-all duration-300 ease-in-out",
          {
            "translate-x-0": sidebarOpen,
            "translate-x-full lg:translate-x-0": !sidebarOpen,
          },
          "fixed lg:static h-full z-40"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-center p-2 mb-6">
            <h1 className="text-xl font-bold text-white">لوحة تحكم المسؤول</h1>
          </div>

          <nav className="mt-6">
            {sidebarItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center p-3 mb-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-admin-primary text-white"
                    : "text-gray-300 hover:bg-admin-secondary"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="ml-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
