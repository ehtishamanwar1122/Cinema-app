
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Booking = () => {
  const seats = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    row: String.fromCharCode(65 + Math.floor(i / 8)),
    number: (i % 8) + 1,
    available: Math.random() > 0.3,
  }));

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Select Your Seats</h1>
        
        <Card className="bg-secondary p-8">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-primary/20 p-4 rounded-lg text-center mb-8">
              Screen
            </div>
            
            <div className="grid grid-cols-8 gap-2 mb-8">
              {seats.map((seat) => (
                <button
                  key={seat.id}
                  disabled={!seat.available}
                  className={`aspect-square rounded p-2 text-sm font-medium ${
                    seat.available
                      ? "bg-secondary hover:bg-primary hover:text-white cursor-pointer"
                      : "bg-gray-800 cursor-not-allowed"
                  }`}
                >
                  {seat.row}{seat.number}
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-8 text-sm mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-secondary"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-800"></div>
                <span>Taken</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              Proceed to Payment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
