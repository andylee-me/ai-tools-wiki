# Claude Code Skill 百科 — CLAUDE.md

## 專案目的

本網站是一個收錄 Claude Code 實用 Skill 的靜態百科網站，以統一格式介紹每款 Skill 的功能、使用時機與操作步驟，幫助使用者快速找到並學會使用各種 Skill 指令。設計目標是讓 AI 閱讀本文件後，可以無需人工介入地獨立新增任意一款 Skill 的詳情頁，並保持全站風格一致。

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
├── scripts/
│   └── main.js            ← 互動功能（相關 Skills 點擊跳轉）
└── skills/
    ├── pdf.html
    ├── code-reviewer.html
    ├── frontend-design.html
    ├── diagnose.html
    ├── docx.html
    ├── pptx.html
    ├── xlsx.html
    ├── paper-reader-skill.html
    ├── simplify.html
    ├── improve-codebase-architecture.html
    ├── excalidraw-diagram.html
    ├── postrboard.html
    ├── claude-api.html
    ├── mcp-integration.html
    ├── agent-development.html
    ├── codex-rescue.html
    ├── loop.html
    ├── schedule.html
    ├── handoff.html
    ├── web-access.html
    ├── skill-development.html
    ├── hook-development.html
    ├── command-development.html
    ├── plugin-structure.html
    ├── update-config.html
    ├── keybindings-help.html
    └── claude-hud-configure.html
```

## 色彩與設計規範

**整體風格：Warm Editorial Catalog（溫暖編輯風目錄）**

實際使用的 CSS 變數（定義於 `styles/main.css` 的 `:root`）：

| CSS 變數       | 色碼      | 用途         |
|---------------|-----------|--------------|
| `--bg`        | #F3EEE5   | 頁面背景（暖奶油色）|
| `--surface`   | #FAF8F4   | 卡片背景     |
| `--surface-2` | #EDE8DF   | 次要背景     |
| `--text`      | #1E1A16   | 主要文字（暖黑）|
| `--text-dim`  | #6A6158   | 次要文字     |
| `--text-muted`| #A39B90   | 淡化文字     |
| `--accent`    | #B54010   | 強調色（深橘紅）|
| `--border`    | #DDD6CA   | 邊框         |
| `--border-2`  | #C9C0B3   | 強邊框       |

**字型（Google Fonts）：**
- 分類標籤、數字、英文 UI：`Barlow Condensed`（400 / 600 / 700 / 900）
- 中文標題、英雄區大字：`Noto Serif TC`（400 / 600 / 900）
- 內文、說明文字：`Noto Sans TC`（300 / 400 / 500 / 700）

CSS 變數對應：
```css
--font-cn:   'Noto Serif TC', serif;
--font-sans: 'Noto Sans TC', sans-serif;
--font-cond: 'Barlow Condensed', sans-serif;
```

**設計元素：**
- 卡片**頂部** 使用分類色邊框（`border-top: 4px solid`）
- Hover 效果：`translateY(-8px)` + `box-shadow 0 16px 40px rgba(30,26,22,0.18)`
- 分類 section 使用 `section-wrap` 包裹，各有 6% 透明度底色 + 5px 左側彩色邊框
- 無純黑背景，無紫色漸層

## Skill 分類系統（僅限以下 7 類）

| 分類        | CSS Class   | section-wrap Class | 色碼       |
|-----------|-------------|-------------------|------------|
| 文件處理    | c-doc       | s-doc             | #0E6FAD   |
| 程式碼開發  | c-code      | s-code            | #1A7A4A   |
| 介面設計    | c-design    | s-design          | #BF2558   |
| AI 整合開發 | c-ai        | s-ai              | #6C3BC5   |
| 自動化流程  | c-auto      | s-auto            | #0C7272   |
| 自訂擴充    | c-extend    | s-extend          | #A85A10   |
| 系統設定    | c-config    | s-config          | #64748B   |

嚴禁自行建立未在此列出的分類。

## 首頁 (index.html) 結構

```html
<header class="navbar">
  <!-- 品牌 + 7 個分類快速連結 + "26 Skills" pill -->
</header>

<section class="hero">
  <!-- 大標題 + 4 格統計數字（hero-stats） -->
</section>

<nav class="cat-nav">
  <!-- sticky 分類導覽列，含彩色圓點 -->
</nav>

<main>
  <!-- 每個分類用 section-wrap + cat-section 包裹 -->
  <div class="section-wrap s-{分類}">
    <section class="cat-section" id="{分類id}">
      <div class="cat-band {分類}">
        <!-- 分類名稱、副標、SKILL 數量 -->
      </div>
      <div class="skills-grid">
        <!-- 卡片列表 -->
      </div>
    </section>
  </div>
</main>

<footer class="site-footer">
```

## Skill 卡片規範（index.html 中）

```html
<article class="skill-card c-{分類}">
  <div class="card-cmd">/{指令}</div>
  <h3 class="card-name">{Skill 名稱}</h3>
  <p class="card-desc">{一句話說明，不超過 50 字}</p>
  <div class="card-foot">
    <a href="skills/{slug}.html" class="card-link">詳細說明 →</a>
  </div>
</article>
```

注意：整張卡片都可點擊（透過 `card-link::after` CSS 覆蓋整個卡片面積）。

## Skill 詳情頁 (skills/*.html) 必要區塊

每個詳情頁必須包含以下所有區塊，順序固定：

1. **Navbar**：左上品牌（`navbar-brand` / `brand-logo` SVG / `brand-name`）連結回 `../index.html`，右側含返回連結與分類 Badge（`nav-badge`）
2. **Back Bar**：「← 返回 Skill 百科首頁」連結
3. **Skill Hero**（兩欄）：左側標題區（`skill-eyebrow` / `skill-title` / `skill-cmd-display` / `skill-hero-desc`）+ 右側 Info Table（`info-table` / `info-table-head`）
4. **適用時機**（`use-list`）：條列式，3-6 項，說明何時該用這個 Skill
5. **使用方式**（`steps-list`）：有序步驟列，3-5 步，每步含 `step-title` + `step-desc`
6. **使用範例**（`code-block`）：1-3 個程式碼區塊，`<span class="hl">` 標紅指令，`<span class="dim">` 標灰說明
7. **注意事項**（`tip-box`）：1-2 個提示框
8. **相關 Skills**（`related-list` 在 `skill-aside`）：列出 2-3 個相關指令，`related-code` 標記指令名稱，點擊後透過 `scripts/main.js` 自動跳轉

每頁 `<head>` 內要加入 `<style>` 覆寫分類顏色：
```css
.section-label { color: {分類色碼}; }
.section-label::before { background: {分類色碼}; }
.use-item::before { color: {分類色碼}; }
.step-item::before { color: {分類色碼}; }
.tip-box { background: {淡色背景}; border-color: {中間色}; border-left-color: {分類色碼}; }
.tip-label { color: {分類色碼}; }
```

每頁最後 `</body>` 前要加：
```html
<script src="../scripts/main.js"></script>
```

## Tip Box 背景色對應表

| 分類       | 色碼      | tip-box background | tip-box border-color |
|----------|-----------|-------------------|----------------------|
| 文件處理   | #0E6FAD  | #EFF5FB           | #B8D4ED              |
| 程式碼開發 | #1A7A4A  | #EFF9F3           | #B8DEC7              |
| 介面設計   | #BF2558  | #FDF0F5           | #EBB8CF              |
| AI 整合   | #6C3BC5  | #F4EFFD           | #CBBDF0              |
| 自動化流程 | #0C7272  | #EDFAFA           | #B3DEDE              |
| 自訂擴充   | #A85A10  | #FBF4EC           | #E5C9A5              |
| 系統設定   | #64748B  | #F1F3F6           | #C4CCD4              |

## 新增 Skill 的完整步驟

當收到「新增 Skill XXX」指令時，依序執行：

**Step 1 — 建立詳情頁**
- 在 `skills/` 目錄建立 `{slug}.html`
- slug 規則：Skill 指令名稱，全小寫，斜線與冒號改連字號
  - 例：`/code-reviewer` → `code-reviewer.html`
  - 例：`/claude-hud:configure` → `claude-hud-configure.html`
- 在 `<head>` 的 `<style>` 標籤內覆寫對應分類顏色
- 填入所有 8 個必要區塊
- 在 `</body>` 前加入 `<script src="../scripts/main.js"></script>`

**Step 2 — 更新首頁**
- 在 `index.html` 對應分類的 `.skills-grid` 末尾新增一張 `.skill-card`
- 加入正確的分類 class（`c-doc`、`c-code` 等）
- 加入 `<div class="card-foot"><a href="skills/{slug}.html" class="card-link">詳細說明 →</a></div>`
- 更新 Hero 區的「精選 Skills」數字與「詳細說明頁」數字
- 更新對應分類 `cat-band` 的 SKILLS 計數

**Step 3 — 驗證**
- 確認 `href` 路徑正確（詳情頁連到 `skills/`，詳情頁連回 `../index.html`）
- 確認 `section-wrap` 的 `s-{分類}` class 存在
- 確認 `<script src="../scripts/main.js"></script>` 已加入

## 命名與格式規則

- **詳情頁檔名**：Skill 指令名稱，全小寫，斜線與冒號改連字號
- **CSS Class**：kebab-case
- **禁止** inline style（除了 `<style>` 標籤內的分類顏色覆寫）
- **語言**：繁體中文；Skill 指令名稱保留英文原名
- **段落長度**：每段說明不超過 100 字
- **禁止**加入指向外部網站的 `<a>` 連結

## 禁止事項

- 不新增 CLAUDE.md 未定義的分類
- 不修改 CSS 變數中已定義的分類顏色（`--c-doc` 等）
- 不更改已建立詳情頁的 URL slug
- 不引入外部 CSS 框架或 JS 套件
- 不使用黑色（#000000）作為主要背景色
- 不使用 Inter、Roboto、Arial 等泛用字型
