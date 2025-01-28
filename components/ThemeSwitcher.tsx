import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      className="rounded-full"
      onClick={
        () => setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? <Moon size="20" /> : <Sun size="20" />}
    </Button >
  )
}
