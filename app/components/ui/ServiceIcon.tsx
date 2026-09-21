import {
  BedDouble,
  BookOpen,
  HeartHandshake,
  Leaf,
  Music4,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  hostel: BedDouble,
  elder: HeartHandshake,
  women: Users,
  music: Music4,
  leaf: Leaf,
  book: BookOpen,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
