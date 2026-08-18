import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages 정적 배포 호환 — 서브패스에서도 동작하도록 상대 경로 base 사용
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
