
### `README.md`

```markdown
# 🚀 React Router App (Vite + React)

This is a basic **React Router v6+** project built with **Vite**. It demonstrates core routing concepts including dynamic routes, a not found page, and nested layouts using `createBrowserRouter` and `RouterProvider`.

---

## 📌 Features

- 🏠 Home, ℹ️ About, 📞 Contact pages
- 🔀 Dynamic route: `/user/:userId`
- ❌ Custom 404 Not Found page
- 🧭 Navigation using `Link`
- ⚙️ Structured using `createBrowserRouter` and `RouterProvider`


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PapaPureza999/react-router-app.git
cd react-router-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🌍 Live Demo

🔗 **GitHub Pages Live:**
[https://PapaPureza999.github.io/react-router-app/](https://PapaPureza999.github.io/react-router-app/)

---

## 🛠️ Deployment (GitHub Pages)

1. Set `base` in `vite.config.js`:

   ```js
   base: '/react-router-app/',
   ```

2. Install `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

---

## 💻 Tech Stack

* React
* React Router DOM
* Vite
* GitHub Pages

---

## 🙌 Author

Built with ❤️ by [@PapaPureza999](https://github.com/PapaPureza999)
