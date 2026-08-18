import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages 정적 배포 호환 — 서브패스에서도 asset 경로가 깨지지 않도록 상대 경로 사용.
// 라우팅은 HashRouter를 사용하므로 별도 서버 rewrite 설정이 필요 없다.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
