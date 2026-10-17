import { useCallback, useEffect, useState } from "react";

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
    return () => document.body.classList.remove("dark-mode");
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((prev) => !prev), []);
  return [isDark, toggle];
}
