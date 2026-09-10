<div align="center">

# 📚 duxt starter

**A minimal Nuxt documentation starter — extend duxt and start writing**

</div>

---

```ts
export default defineNuxtConfig({
  extends: ['@kirchdev/duxt']
});
```

That's it. Add Markdown to `docs/` and duxt turns it into a documentation site.

## 📦 Install & run

```bash
npx nuxi@latest init -t github:kirchDev/duxt-starter my-docs
cd my-docs
pnpm install
pnpm dev
```

Open the local address Nuxt prints, then edit `docs/index.md`.

## ✨ Features

- **📄 Markdown-first** — files in `docs/` become documentation pages.
- **🎨 Ready-made theme** — duxt supplies the site shell, navigation, and dark mode.
- **🧭 Clear first step** — the landing page and navbar lead readers to Getting started.
- **⚙️ Small configuration surface** — set the site name in `app/app.config.ts`.

## 🗂️ Project structure

```text
app/app.config.ts  Site title and duxt configuration
docs/              Your Markdown documentation
nuxt.config.ts     The duxt layer extension
```

## 🤝 Contributing

This template is intentionally small. Improvements that keep its first-run
experience simple are welcome in the [duxt repository](https://github.com/kirchDev/duxt).

## 📄 License

[MIT](LICENSE) © [Titus Kirch](https://github.com/TitusKirch/) / [IT-Dienstleistungen Titus Kirch](https://kirch.dev)
