# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Visit site

[このサイトのリンク](https://group-a.hachio0525.workers.dev/)
[Cloudflare Workers版のリンク](https://dash.cloudflare.com/115f71b15a9e2caf11783eb86f176439/workers/services/view/group-a/production/builds/3b623518-3a76-4771-a53a-3778dd2e8101)

## Demonstration

開発環境で動作させるには、ターミナルで以下のコマンドを実行してください。

pnpmがインストールされていない場合は、[公式サイト](https://pnpm.io/ja/installation)を参照してインストールしてください。
```bash
pnpm install
```

コードフォーマットを適用するには、以下のコマンドを実行します。これによりエディターでの表示が整います。
```bash
pnpm format
```

プロジェクトをビルドするには、以下のコマンドを実行します。
```bash
pnpm build
```

その後、以下のコマンドで開発サーバーを起動します。
```bash
npm (run) dev
```
