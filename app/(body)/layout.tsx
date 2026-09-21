import { ReactNode } from "react";

export default function BodyLayout({ children }: { children: ReactNode }) {
  return <div className="relative min-h-screen overflow-x-hidden">{children}</div>;
}
