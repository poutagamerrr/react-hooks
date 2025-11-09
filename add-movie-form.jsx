import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AddMovieForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 5,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.description.trim() || !formData.posterURL.trim()) {
      alert("Please fill in all fields")
      return
    }

    onAdd({
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL,
      rating: Math.min(Math.max(Number.parseFloat(formData.rating.toString()), 0), 10),
    })

    setFormData({
      title: "",
      description: "",
      posterURL: "",
      rating: 5,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-foreground">
            Movie Title
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter movie title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="bg-background border-border"
          />
        </div>

        {/* Rating */}
        <div className="space-y-2">
          <Label htmlFor="rating" className="text-foreground">
            Rating (0-10)
          </Label>
          <Input
            id="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: Number.parseFloat(e.target.value) || 0 })}
            className="bg-background border-border"
          />
        </div>
      </div>

      {/* Poster URL */}
      <div className="space-y-2">
        <Label htmlFor="posterURL" className="text-foreground">
          Poster URL
        </Label>
        <Input
          id="posterURL"
          type="url"
          placeholder="https://example.com/poster.jpg"
          value={formData.posterURL}
          onChange={(e) => setFormData({ ...formData, posterURL: e.target.value })}
          className="bg-background border-border"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-foreground">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Enter movie description"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="bg-background border-border resize-none"
        />
      </div>

      {/* Form Actions */}
      <div className="flex gap-3 justify-end pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Movie</Button>
      </div>
    </form>
  )
}
