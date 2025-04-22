import { Card } from "@/components/ui/card";
import { Ticket } from "lucide-react";

const Dashboard = () => {
  const bookings = [
    { id: 1, movie: "Inception", date: "2025-04-20", seats: "A1, A2", status: "Upcoming" },
    { id: 2, movie: "The Dark Knight", date: "2025-04-18", seats: "B4, B5", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-secondary p-6">
              <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>
              <nav className="space-y-2">
                <a href="#" className="block p-2 rounded hover:bg-primary transition-colors">
                  My Bookings
                </a>
                <a href="#" className="block p-2 rounded hover:bg-primary transition-colors">
                  Profile
                </a>
                <a href="#" className="block p-2 rounded hover:bg-primary transition-colors">
                  Preferences
                </a>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="bg-secondary p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <Ticket className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-bold">{booking.movie}</h3>
                        <p className="text-sm text-gray-400">Date: {booking.date}</p>
                        <p className="text-sm text-gray-400">Seats: {booking.seats}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === "Upcoming" ? "bg-primary/20 text-primary" : "bg-green-500/20 text-green-500"
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
