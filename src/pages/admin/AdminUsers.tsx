
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminUsers = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold tracking-tight">إدارة المستخدمين</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>قائمة المستخدمين</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            هذه صفحة مستقبلية لإدارة المستخدمين. سيتم تنفيذها في الإصدار القادم.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
