
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminProducts = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold tracking-tight">إدارة المنتجات</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>قائمة المنتجات</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            هذه صفحة مستقبلية لإدارة المنتجات. سيتم تنفيذها في الإصدار القادم.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProducts;
