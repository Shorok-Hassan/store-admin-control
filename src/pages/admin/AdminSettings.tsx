
import { useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const AdminSettings = () => {
  const { settings, updateSettings } = useAdmin();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    storeName: settings.storeName,
    storeDescription: settings.storeDescription,
    contactEmail: settings.contactEmail,
    maintenanceMode: settings.maintenanceMode,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      maintenanceMode: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم تحديث إعدادات المتجر بنجاح",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold tracking-tight">إعدادات المتجر</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات عامة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="storeName">اسم المتجر</Label>
                <Input
                  id="storeName"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="storeDescription">وصف المتجر</Label>
                <Textarea
                  id="storeDescription"
                  name="storeDescription"
                  value={formData.storeDescription}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactEmail">البريد الإلكتروني للتواصل</Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>خيارات المتجر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenanceMode">وضع الصيانة</Label>
                  <p className="text-sm text-muted-foreground">
                    عند تفعيل وضع الصيانة، لن يتمكن الزوار من استخدام المتجر
                  </p>
                </div>
                <Switch
                  id="maintenanceMode"
                  checked={formData.maintenanceMode}
                  onCheckedChange={handleSwitchChange}
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full md:w-auto">
            حفظ الإعدادات
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
