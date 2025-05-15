
import { Link } from "react-router-dom";
import { useAdmin } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  const { settings, isAdmin } = useAdmin();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {settings.maintenanceMode && (
        <Alert variant="destructive" className="border-none">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Maintenance Mode</AlertTitle>
          <AlertDescription>
            The site is currently under maintenance. Please check back later.
          </AlertDescription>
        </Alert>
      )}

      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{settings.storeName}</h1>
          <div className="flex gap-4">
            {isAdmin ? (
              <Button asChild variant="outline">
                <Link to="/admin">Admin Dashboard</Link>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/login">Admin Login</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Welcome to {settings.storeName}</h2>
            <p className="text-lg text-gray-600">{settings.storeDescription}</p>
            <div className="flex gap-4">
              <Button onClick={scrollToProducts}>Browse Products</Button>
              <Button variant="outline" onClick={scrollToContact}>Contact Us</Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Store Image</p>
            </div>
          </div>
        </div>

        <section id="products" className="mt-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow p-6">
                <div className="bg-gray-200 aspect-square rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Product Image</p>
                </div>
                <h3 className="font-semibold text-lg">Product {item}</h3>
                <p className="text-gray-600 mt-2">Product description goes here with details.</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 mb-12 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-4">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> {settings.contactEmail}</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Store Street, City, Country</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Send us a message</h3>
                <div className="grid gap-4">
                  <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
                  <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                  <textarea placeholder="Your message" rows={4} className="w-full p-2 border rounded resize-none"></textarea>
                  <Button>Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-admin-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold mb-4">{settings.storeName}</h3>
              <p className="text-gray-300">{settings.storeDescription}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="text-gray-300 hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <p className="text-gray-300">{settings.contactEmail}</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {settings.storeName}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
