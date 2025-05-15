
import { Link } from "react-router-dom";
import { useAdmin } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  const { settings, isAdmin } = useAdmin();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100" dir="rtl">
      {settings.maintenanceMode && (
        <Alert variant="destructive" className="border-none">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>وضع الصيانة</AlertTitle>
          <AlertDescription>
            الموقع حالياً في وضع الصيانة. يرجى العودة لاحقاً.
          </AlertDescription>
        </Alert>
      )}

      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{settings.storeName}</h1>
          <div className="flex gap-4">
            {isAdmin ? (
              <Button asChild variant="outline">
                <Link to="/admin">لوحة التحكم</Link>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/login">تسجيل دخول المسؤول</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">مرحباً بك في {settings.storeName}</h2>
            <p className="text-lg text-gray-600">{settings.storeDescription}</p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#products">تصفح المنتجات</a>
              </Button>
              <Button variant="outline">تواصل معنا</Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500">صورة المتجر</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-admin-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold mb-4">{settings.storeName}</h3>
              <p className="text-gray-300">{settings.storeDescription}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    المنتجات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <p className="text-gray-300">{settings.contactEmail}</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {settings.storeName}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
