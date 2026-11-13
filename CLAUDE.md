# 生成式 AI 工具圖鑑 — CLAUDE.md

## 專案目的

本網站是一個收錄各種生成式 AI 工具的靜態百科網站，以統一格式介紹每款工具，讓讀者快速了解工具的用途、優缺點與使用場景。目標受眾為對 AI 工具有興趣的一般使用者與學習者。

## 技術規格

- 純靜態網站：HTML5 + CSS3 + 少量 vanilla JavaScript（無框架）
- 不使用 React、Vue、Angular 或任何前端框架
- 不引入外部 CSS 框架（如 Bootstrap、Tailwind）
- 支援 GitHub Pages 部署
- 所有路徑使用相對路徑（以 index.html 為根）

## 目錄結構

```
/
├── CLAUDE.md              ← 本文件（專案規則）
├── index.html             ← 首頁（工具總覽）
├── styles/
│   └── main.css           ← 全站共用樣式
├── tools/
│   ├── _template.html     ← 工具頁面模板（新增工具時複製此檔）
│   ├── chatgpt.html
│   ├── claude.html
│   └── midjourney.html
└── assets/
    └── img/               ← 工具圖示（可選，命名同工具 slug）
```

## 色彩與設計規範

| 用途       | 色碼       |
|----------|------------|
| 頁面背景   | #0f0f1a   |
| 卡片背景   | rgba(30, 27, 75, 0.6) |
| 主強調色   | #7c3aed（紫色）|
| 次強調色   | #06b6d4（青色）|
| 標題文字   | #f1f5f9   |
| 內文文字   | #cbd5e1   |
| 分隔線     | #334155   |

**設計風格：** 科技感、暗色系、玻璃態（Glass Morphism）
- 卡片使用 `backdrop-filter: blur(10px)` 配合半透明背景
- 卡片邊框使用 `1px solid rgba(255,255,255,0.1)`
- Hover 效果：`transform: translateY(-4px)` + 加深陰影

## 工具分類標籤（僅限以下選項）

| 標籤     | 色碼（徽章背景）|
|--------|---------------|
| 文字生成 | #7c3aed      |
| 圖像生成 | #db2777      |
| 程式碼助手| #059669      |
| 語音/影片 | #d97706      |
| 多模態   | #0891b2      |

嚴禁自行建立未在此列出的分類標籤。

## 首頁 (index.html) 結構規範

```html
<header>  <!-- 固定導覽列：網站標題 + 簡短說明 -->
<section class="hero">  <!-- Hero 區塊 -->
  <h1>生成式 AI 工具圖鑑</h1>
  <p>副標題：收錄 XX 款 AI 工具，幫助你找到最適合的生產力利器</p>
</section>
<section class="tools-grid">  <!-- 工具卡片網格 -->
  <!-- 每個工具一張 .tool-card -->
</section>
<footer>  <!-- 頁腳 -->
```

## 工具卡片規範（index.html 中的每張卡片）

```html
<article class="tool-card">
  <div class="card-header">
    <span class="category-badge category-{分類}">分類名稱</span>
  </div>
  <h3 class="tool-name">工具名稱</h3>
  <p class="tool-desc">一句話描述（不超過 50 字）</p>
  <a href="tools/{slug}.html" class="btn-detail">查看詳情 →</a>
</article>
```

## 工具詳情頁 (tools/*.html) 必要區塊

每個工具詳情頁必須包含以下所有區塊，順序固定：

1. **Hero 區**：工具名稱（大標題）+ 類別徽章 + 一句話描述
2. **基本資訊表格**：開發商、發布年份、定價模式、適用平台
3. **核心功能**：條列式，3-6 項，每項附簡短說明
4. **優點**：條列式，3-5 項（綠色 ✓ 符號）
5. **缺點**：條列式，2-4 項（紅色 ✗ 符號）
6. **適合對象**：2-4 段，說明哪些人最適合使用
7. **實際應用場景**：2-4 個具體範例，每個有標題與說明
8. **底部導覽**：「← 返回首頁」按鈕

## 新增工具的完整步驟

當收到「新增工具 XXX」指令時，依序執行：

**Step 1** — 建立工具頁面
- 複製 `tools/_template.html` 為 `tools/{slug}.html`
- slug 規則：全小寫英文、空格用 hyphen（例：stable-diffusion.html）
- 填入所有 8 個必要區塊的內容

**Step 2** — 更新首頁
- 在 `index.html` 的 `.tools-grid` 區塊末尾新增一張 `.tool-card`
- 卡片必須包含：正確分類徽章、工具名稱、一句話描述、連到工具頁的按鈕
- 更新 hero 區的工具數量計數

**Step 3** — 驗證
- 確認 `href` 路徑正確
- 確認使用的分類標籤在規範列表中

## 命名與格式規則

- **檔名**：全小寫，空格用 hyphen
- **CSS Class**：kebab-case（例：`tool-card`、`category-badge`）
- **禁止** inline style（除非動態計算無法避免）
- **語言**：繁體中文；工具名稱保留英文原名；技術術語可英文
- **段落長度**：每段說明不超過 150 字
- **禁止**加入真實外部超連結（避免連結失效影響成績）

## 禁止事項

- 不加入指向外部網站的 `<a href="...">` 連結
- 不引入外部 CDN 資源（字型除外，可用 Google Fonts）
- 不新增 CLAUDE.md 未定義的分類標籤
- 不修改 `styles/main.css` 中的 CSS 變數定義（新增可以，但不能刪除既有變數）
- 不更改已建立工具頁的 URL slug（會破壞既有連結）
