import { StarIcon } from "./icons";

export function StarRating({
  rating,
  reviewCount,
  size = 14,
}: {
  rating: number;
  reviewCount?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.round(rating);
          return (
            <StarIcon
              key={i}
              width={size}
              height={size}
              className={filled ? "fill-current" : "text-border-strong"}
            />
          );
        })}
      </div>
      <span className="text-xs text-text-muted">
        {rating.toFixed(1)}
        {typeof reviewCount === "number" && (
          <span> · {reviewCount} rəy</span>
        )}
      </span>
    </div>
  );
}
