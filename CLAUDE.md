# Claude Code Skill 百科 — CLAUDE.md

## 專案目的

本網站是一個收錄 Claude Code 實用 Skill 的靜態百科網站，以統一格式介紹每款 Skill 的功能、使用時機與操作步驟，幫助使用者快速找到並學會使用各種 Skill 指令。

## 技術規格

- 純靜態網站：HTML5 + CSS3 + 少量 vanilla JavaScript（無框架）
- 不使用 React、Vue、Angular 或任何前端框架
- 不引入外部 CSS 框架（如 Bootstrap、Tailwind）
- 支援 GitHub Pages 部署
- 所有路徑使用相對路徑

## 目錄結構

```
/
├── CLAUDE.md              ← 本文件（專案規則）
├── index.html             ← 首頁（所有 Skill 分類總覽）
├── styles/
│   └── main.css           ← 全站共用樣式
└── skills/
    ├── pdf.html
    ├── code-reviewer.html
    ├── frontend-design.html
    ├── diagnose.html
    └── （新增的 Skill 詳情頁放這裡）
```

## 色彩與設計規範

**整體風格：Warm Editorial Catalog（溫暖編輯風目錄）**

| 用途             | 色碼                |
|----------------|---------------------|
| 頁面背景         | #F5F0E8（暖奶油色） |
| 卡片背景         | #FEFDFB（近白）     |
| 主文字           | #231F1B（暖黑）     |
| 次要文字         | #6B6560             |
| Accent（連結）   | #B5440F（深橘紅）   |
| 邊框             | #E5DDD3             |

**字型（Google Fonts）：**
- 標題：DM Serif Display（英文）＋ Noto Serif TC（中文）
- 內文：Lora ＋ Noto Serif TC
- 指令標籤：Fira Code
- UI 文字：Noto Sans TC

**設計元素：**
- 卡片左側使用分類色邊框（3px solid）取代圓角玻璃態
- hover 效果：translateY(-3px) + 加深陰影
- 無純黑背景，無紫色漸層

## Skill 分類系統（僅限以下 7 類）

| 分類        | CSS Class   | 色碼       |
|-----------|-------------|------------|
| 文件處理    | c-doc       | #0E6FAD   |
| 程式碼開發  | c-code      | #1A7A4A   |
| 介面設計    | c-design    | #BF2558   |
| AI 整合開發 | c-ai        | #6C3BC5   |
| 自動化流程  | c-auto      | #0C7272   |
| 自訂擴充    | c-extend    | #A85A10   |
| 系統設定    | c-config    | #64748B   |

嚴禁自行建立未在此列出的分類。

## 首頁 (index.html) 結構

```
<header class="navbar">
<section class="hero">          ← 大標題 + 4格統計數字
<nav class="cat-nav">           ← 分類快速導覽列（sticky）
<main>
  <section class="cat-section" id="{分類id}">   ← 每個分類一個 section
    <div class="cat-header">    ← 分類標題列
    <div class="skills-grid">   ← 3欄卡片網格
      <article class="skill-card c-{分類}">      ← 每張卡片
<footer class="site-footer">
```

## Skill 卡片規範（index.html 中）

```html
<article class="skill-card c-{分類}">
  <span class="card-tag c-{分類}">{分類名稱}</span>
  <h3 class="card-name">{Skill 名稱}</h3>
  <p class="card-desc">{一句話說明，不超過 50 字}</p>
  <div class="card-footer">
    <code class="card-cmd">/{指令}</code>
    <!-- 有詳情頁時才加 -->
    <a href="skills/{slug}.html" class="card-link">了解更多 →</a>
  </div>
</article>
```

## Skill 詳情頁 (skills/*.html) 必要區塊

每個詳情頁必須包含以下所有區塊，順序固定：

1. **Navbar**：同首頁，左上品牌連結回首頁，右側分類 Badge
2. **Back Bar**：「← 返回首頁」連結
3. **Skill Hero**（兩欄）：左側標題區 + 右側 Info Panel
4. **適用時機**：條列式，3-6 項，說明何時該用這個 Skill
5. **使用方式**：有序步驟列，3-5 步
6. **使用範例**：1-3 個程式碼區塊（黑色背景，酸綠色指令）
7. **注意事項**：1-2 個 Tip Box
8. **相關 Skills**（Aside 側欄）

## 新增 Skill 的完整步驟

當收到「新增 Skill XXX」指令時，依序執行：

**Step 1 — 建立詳情頁**
- 在 `skills/` 目錄建立 `{slug}.html`
- slug 規則：Skill 指令名稱，斜線改連字號（`code-reviewer.html`）
- 套用對應分類的 CSS 顏色變數（在 `<style>` 標籤內覆寫）
- 填入所有 8 個必要區塊

**Step 2 — 更新首頁**
- 在 `index.html` 對應分類的 `.skills-grid` 末尾新增一張 `.skill-card`
- 加入正確的分類 class（`c-doc`、`c-code` 等）
- 加入 `<a href="skills/{slug}.html" class="card-link">了解更多 →</a>`
- 更新 Hero 區的「精選 Skills」數字

**Step 3 — 驗證**
- 確認 `href` 路徑正確（詳情頁連到 `skills/`，詳情頁連回 `../index.html`）
- 確認使用的分類在規範列表中

## 命名與格式規則

- **詳情頁檔名**：Skill 指令名稱，全小寫，斜線改連字號
  - 例：`/code-reviewer` → `code-reviewer.html`
  - 例：`/claude-hud:configure` → `claude-hud-configure.html`
- **CSS Class**：kebab-case
- **禁止** inline style（除了分類顏色覆寫的 `<style>` 標籤）
- **語言**：繁體中文；Skill 指令名稱保留英文原名
- **段落長度**：每段說明不超過 100 字
- **禁止**加入指向外部網站的 `<a>` 連結

## 禁止事項

- 不新增 CLAUDE.md 未定義的分類（Class）
- 不修改 CSS 變數中已定義的分類顏色
- 不更改已建立詳情頁的 URL slug
- 不引入外部 CSS 框架或 JS 套件
- 不使用黑色（#000000 或接近純黑）作為主要背景色
- 不使用 Inter、Roboto 等泛用字型
