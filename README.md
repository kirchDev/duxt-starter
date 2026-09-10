<div align="center">

# duxt starter

**A minimal documentation site built with [duxt](https://github.com/kirchDev/duxt)**

</div>

## 🚀 Setup

Create a new site from this template:

```bash
npx nuxi@latest init -t github:kirchDev/duxt-starter my-docs
cd my-docs
pnpm install
pnpm dev
```

Nuxt prints a local address. Open it, then change `docs/index.md` to start
writing.

The layer needs no `content.config.ts` for a single local `docs/` folder. Set
your site's name in `app/app.config.ts`; add configuration only when your site
needs more than the defaults.

## 📁 Project structure

```text
app/app.config.ts  Site title and duxt configuration
docs/              Your Markdown documentation
nuxt.config.ts     The duxt layer extension
```

## 🤝 Contributing

This template is intentionally small. Improvements that keep its first-run
experience simple are welcome in the [duxt repository](https://github.com/kirchDev/duxt).
