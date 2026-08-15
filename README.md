# THE 25TH HOUR editable storefront

## 商品图片换图

商品数据统一位于 `src/data/site.ts`。每件商品使用两个图片字段：

- `image`：默认显示的场景图或外包装图。
- `hoverImage`：鼠标悬停或键盘聚焦时显示的透明底正面商品图；不填写时仍显示单图。

建议每款香水使用独立目录，例如：

```text
public/assets/images/products/midnight-studio/
  scene.png
  product.png
```

新增商品时复制现有的“深夜书房”数据项，替换名称、规格、价格和两个图片路径即可。

当前商品按 `香水 → 香氛 → 身体油 → 卸妆膏` 排列；分类入口同样从 `src/data/site.ts` 的 `categories` 数组读取。

Desktop-first React/Vite fragrance storefront based on the supplied Aesop reference.

## Run

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

## Edit content

- Brand name, notice, navigation, hero slides, products, fragrance families, and journal entries: `src/data/site.ts`
- Page structure and interactions: `src/App.tsx`
- Design tokens, layout, responsive rules, and motion: `src/styles.css`
- Local fonts and media: `public/assets/`
- Design-system record: `DESIGN.md`

The current commercial content is explicitly demonstration content. Replace the product names, prices, descriptions, claims, and reference-site media with final brand material before publishing.

## Implemented interactions

- Transparent hero navigation that becomes a fixed paper header
- Full-width mega navigation
- Search and cart drawers with Escape close
- Three-slide hero carousel
- Scroll-snap product rail with controls
- Add-to-cart state and drawer feedback
- Progressive three-question scent finder
- Three-layer sticky story stack
- Layering quantity control
- Reduced-motion fallbacks
