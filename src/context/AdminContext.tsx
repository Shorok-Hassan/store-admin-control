
import { createContext, useContext, useState, ReactNode } from 'react';

type StoreStats = {
  totalProducts: number;
  totalUsers: number;
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
};

type StoreSettings = {
  maintenanceMode: boolean;
  storeName: string;
  storeDescription: string;
  contactEmail: string;
};

type RecentUser = {
  id: string;
  name: string;
  email: string;
  registeredAt: string;
  status: 'active' | 'inactive';
};

type RecentOrder = {
  id: string;
  customer: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
};

interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  stats: StoreStats;
  settings: StoreSettings;
  updateSettings: (newSettings: Partial<StoreSettings>) => void;
  recentUsers: RecentUser[];
  recentOrders: RecentOrder[];
}

const defaultStats: StoreStats = {
  totalProducts: 152,
  totalUsers: 543,
  totalRevenue: 25430,
  totalOrders: 276,
  pendingOrders: 12,
};

const defaultSettings: StoreSettings = {
  maintenanceMode: false,
  storeName: "متجر العربي",
  storeDescription: "متجر إلكتروني للمنتجات العربية",
  contactEmail: "contact@arabstore.com",
};

const defaultRecentUsers: RecentUser[] = [
  { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', registeredAt: '2023-05-15', status: 'active' },
  { id: '2', name: 'سارة أحمد', email: 'sara@example.com', registeredAt: '2023-05-14', status: 'active' },
  { id: '3', name: 'محمد علي', email: 'mohamed@example.com', registeredAt: '2023-05-13', status: 'inactive' },
  { id: '4', name: 'فاطمة حسن', email: 'fatima@example.com', registeredAt: '2023-05-12', status: 'active' },
  { id: '5', name: 'عمر خالد', email: 'omar@example.com', registeredAt: '2023-05-11', status: 'active' },
];

const defaultRecentOrders: RecentOrder[] = [
  { id: '#12345', customer: 'أحمد محمد', amount: 299, status: 'completed', date: '2023-05-15' },
  { id: '#12346', customer: 'سارة أحمد', amount: 199, status: 'pending', date: '2023-05-14' },
  { id: '#12347', customer: 'محمد علي', amount: 599, status: 'completed', date: '2023-05-13' },
  { id: '#12348', customer: 'فاطمة حسن', amount: 399, status: 'cancelled', date: '2023-05-12' },
  { id: '#12349', customer: 'عمر خالد', amount: 799, status: 'pending', date: '2023-05-11' },
];

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [stats, setStats] = useState<StoreStats>(defaultStats);
  const [settings, setSettings] = useState<StoreSettings>(defaultSettings);
  const [recentUsers] = useState<RecentUser[]>(defaultRecentUsers);
  const [recentOrders] = useState<RecentOrder[]>(defaultRecentOrders);

  const updateSettings = (newSettings: Partial<StoreSettings>) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        stats,
        settings,
        updateSettings,
        recentUsers,
        recentOrders
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
