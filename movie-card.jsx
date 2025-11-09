import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function MovieCard({ movie }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-card border-border">
      {/* Poster Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={movie.posterURL || "/placeholder.svg"}
          alt={movie.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">{movie.title}</h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{movie.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">{movie.rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-muted-foreground">/10</span>
        </div>
      </div>
    </Card>
  )
}
