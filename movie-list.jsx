import { useState, useMemo } from "react"
import MovieCard from "./movie-card"
import MovieFilter from "./movie-filter"

export default function MovieList({ movies }) {
  const [titleFilter, setTitleFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState(null)

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase())
      const matchesRating = ratingFilter === null || movie.rating >= ratingFilter

      return matchesTitle && matchesRating
    })
  }, [movies, titleFilter, ratingFilter])

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <MovieFilter
        titleFilter={titleFilter}
        onTitleChange={setTitleFilter}
        ratingFilter={ratingFilter}
        onRatingChange={setRatingFilter}
      />

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-muted-foreground text-lg">No movies found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
