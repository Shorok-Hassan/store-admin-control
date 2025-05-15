
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminOrders = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold tracking-tight">إدارة الطلبات</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>قائمة الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            هذه صفحة مستقبلية لإدارة الطلبات. سيتم تنفيذها في الإصدار القادم.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;
