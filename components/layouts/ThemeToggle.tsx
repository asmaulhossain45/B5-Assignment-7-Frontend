"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div onClick={() => setTheme(isDark ? "light" : "dark")}>
      <span
        className={`inline-block transition-transform duration-300 ease-in-out ${
          isDark ? "rotate-90" : "rotate-0"
        }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </span>
    </div>
  );
};

export default ThemeToggle;
