import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Film } from "lucide-react";

const Index = () => {
  const featuredMovies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: "9.0" },
    { id: 2, title: "The Dark Knight", genre: "Action", rating: "9.2" },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", rating: "8.9" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-black to-primary/20">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Experience Movies Like Never Before</h1>
            <p className="text-lg mb-8 text-gray-300">
              Book your tickets now and enjoy the latest blockbusters in premium quality.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Movies */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMovies.map((movie) => (
            <Card key={movie.id} className="bg-secondary p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <Film className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-bold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.genre}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold">★ {movie.rating}</span>
                <Button variant="outline" className="hover:bg-primary hover:text-white">
                  Book Tickets
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
