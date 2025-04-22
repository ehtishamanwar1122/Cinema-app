
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Film } from "lucide-react";

const Movies = () => {
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", duration: "2h 28m", rating: "9.0" },
    { id: 2, title: "The Dark Knight", genre: "Action", duration: "2h 32m", rating: "9.2" },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", duration: "2h 49m", rating: "8.9" },
    { id: 4, title: "Pulp Fiction", genre: "Crime", duration: "2h 34m", rating: "8.9" },
    { id: 5, title: "The Matrix", genre: "Sci-Fi", duration: "2h 16m", rating: "8.7" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} className="bg-secondary p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <Film className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-bold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.genre}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Duration: {movie.duration}</p>
                  <span className="text-primary font-bold">★ {movie.rating}</span>
                </div>
                <Button variant="outline" className="hover:bg-primary hover:text-white">
                  View Showtimes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
