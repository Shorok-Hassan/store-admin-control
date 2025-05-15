
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAdmin } from "@/context/AdminContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { setIsAdmin } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // For demo purposes, hardcoded admin credentials
  const adminCredentials = {
    email: "admin@example.com",
    password: "admin123",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for demo
    if (!formData.email || !formData.password) {
      toast({
        title: "خطأ في تسجيل الدخول",
        description: "يرجى إدخال البريد الإلكتروني وكلمة المرور",
        variant: "destructive",
      });
      return;
    }
    
    // Check if credentials match admin credentials
    if (
      formData.email === adminCredentials.email &&
      formData.password === adminCredentials.password
    ) {
      setIsAdmin(true);
      
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك في لوحة تحكم المسؤول",
      });
      
      // Redirect to admin dashboard or to the page they were trying to access
      const from = location.state?.from?.pathname || "/admin";
      navigate(from);
    } else {
      toast({
        title: "خطأ في تسجيل الدخول",
        description: "بيانات الاعتماد غير صحيحة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-admin-light p-4" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">تسجيل الدخول</CardTitle>
          <CardDescription className="text-center">
            أدخل بيانات اعتماد المسؤول للوصول إلى لوحة التحكم
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">تسجيل الدخول</Button>
          </CardFooter>
        </form>
        <div className="p-4 bg-gray-50 text-sm text-center rounded-b-lg">
          للتجربة، استخدم: admin@example.com / admin123
        </div>
      </Card>
    </div>
  );
};

export default Login;
