# 钱光耀 · 个人作品集
React + Vite + TypeScript；PC 版心 1700px，适配窄屏。

## 本地预览
http://127.0.0.1:5173/
启动：`npm run dev`，或 `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5173 --strictPort`。

## 内容维护
- `src/main.tsx`：首页、简历信息、联系方式。
- `src/project-data.ts`：10 个项目，81 个章节，106 页材料完整映射。
- `src/experience-data.ts`：逐项目体验分析、访谈提纲与项目反思。
- `src/Projects.tsx`、`src/ExperiencePanel.tsx`：封面、详情、图版缩放和交互旅程。
- `public/projects/ealing-v2/`、`public/projects/su7-v2/`：新 Ealing.pdf 的 35 页与 SU7.pdf 的 31 页完整渲染。
- `src/research-data.ts`、`src/ResearchPanel.tsx`：10 个项目的公开研究、来源、分析与设计取舍。
- `src/projects.css`：封面、案例及响应式样式。
- `docs/CONTENT_SOURCES.md`：内容来源与研究状态说明。

## 设计与交互
动态极光背景；精选项目横向轨道；封面悬停构图变化；可切换的体验阶段（支持方向键）；整页连续展示；图版缩放和 Esc 关闭；邮箱与电话链接；尊重系统减少动态效果设置。
个人模块采用姓名排版，不展示个人照片。源 PDF / PPTX / 简历保持不变。当前完整展示新提供的 PDF，停止使用上一轮文字覆盖版；新 Ealing 末页自身不含 Team 31。

## 发布
仓库包含 `.github/workflows/deploy-pages.yml`。推送到 `main` 后，GitHub Actions 会完成构建并发布到 GitHub Pages。
