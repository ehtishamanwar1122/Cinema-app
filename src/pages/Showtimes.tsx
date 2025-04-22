
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Showtimes = () => {
  const times = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"];
  const dates = ["2025-04-19", "2025-04-20", "2025-04-21", "2025-04-22"];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Movie Showtimes</h1>
        
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {dates.map((date) => (
            <Button
              key={date}
              variant="outline"
              className="min-w-[120px] hover:bg-primary hover:text-white"
            >
              {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </Button>
          ))}
        </div>

        <div className="space-y-6">
          {times.map((time) => (
            <Card key={time} className="bg-secondary p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-2">{time}</h3>
                  <p className="text-gray-400">Standard Hall • Screen 1</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showtimes;
