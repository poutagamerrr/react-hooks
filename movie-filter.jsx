import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MovieFilter({ titleFilter, onTitleChange, ratingFilter, onRatingChange }) {
  const ratingOptions = [
    { value: null, label: "All Ratings" },
    { value: 9, label: "9.0+ ⭐⭐⭐" },
    { value: 8, label: "8.0+ ⭐⭐" },
    { value: 7, label: "7.0+ ⭐" },
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center bg-card border border-border rounded-lg p-4">
      {/* Title Search */}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by title..."
          value={titleFilter}
          onChange={(e) => onTitleChange(e.target.value)}
          className="pl-10 bg-background border-border"
        />
      </div>

      {/* Rating Filter */}
      <Select
        value={ratingFilter !== null ? ratingFilter.toString() : "all"}
        onValueChange={(value) => {
          onRatingChange(value === "all" ? null : Number.parseFloat(value))
        }}
      >
        <SelectTrigger className="w-full sm:w-48 bg-background border-border">
          <SelectValue placeholder="Filter by rating" />
        </SelectTrigger>
        <SelectContent>
          {ratingOptions.map((option) => (
            <SelectItem key={option.value ?? "all"} value={option.value !== null ? option.value.toString() : "all"}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Clear Filters */}
      {(titleFilter || ratingFilter !== null) && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            onTitleChange("")
            onRatingChange(null)
          }}
          className="gap-2"
        >
          <X className="w-4 h-4" />
          Clear
        </Button>
      )}
    </div>
  )
}
