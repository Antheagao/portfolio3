"use client";
import { useEffect, useState } from "react";

// The site is statically prerendered, so a server-rendered year would freeze
// at build time; this corrects it on the client after hydration.
export default function Year() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
