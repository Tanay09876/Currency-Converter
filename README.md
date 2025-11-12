<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======

# Currency-Converter
A simple and modern React-based Currency Converter app that automatically detects your local currency and converts between multiple currencies using live exchange rates from the ExchangeRate-API


## 🚀 Features

* **🌐 Auto-detect Local Currency**
  Automatically detects your country and local currency using the free [ipapi.co](https://ipapi.co/) geolocation API.

* **💱 Real-Time Currency Conversion**
  Fetches up-to-date exchange rates using the **ExchangeRate-API** service with your personal API key.

* **🔁 Swap Currencies**
  Instantly swap your “From” and “To” currencies with one click.

* **💰 Dynamic Amount Input**
  Convert any custom amount easily by entering the value in the input field.

* **⏳ Loading State Indicator**
  Shows a “Getting Exchange Rate...” message while fetching live data.

* **⚠️ Error Handling**
  Displays clear error messages if the API request fails or rates are unavailable.

* **🎨 Modern Responsive UI**
  Built with **React** and **Tailwind CSS** for a clean, smooth, and responsive interface that works perfectly on all devices.

---

## 🧩 Tech Stack

* **Frontend:** React
* **Styling:** Tailwind CSS
* **APIs Used:**

  * [ipapi.co](https://ipapi.co/) — For auto-detecting the user’s local currency
  * [ExchangeRate-API](https://www.exchangerate-api.com/) — For live exchange rates

---

## ⚙️ Environment Variables

Create a `.env` file in your project root and add the following variables:

```bash
VITE_API_KEY=your_api_key_here
VITE_API_URL=https://v6.exchangerate-api.com/v6
```

> 🪙 You can **get a free API key** by signing up at [ExchangeRate-API](https://www.exchangerate-api.com/).

---

## 🖥️ How to Run Locally

1. **Clone this repository:**

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your `.env` file** with your API key (as shown above).

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to:

   ```
   http://localhost:5173/
   ```

---


## 💡 Future Enhancements

* Display historical currency rate trends with charts
* Add conversion history or favorites
* Add dark/light mode toggle
* Multi-language support

---



Would you like me to include a **“Live Demo”** section with a deploy link placeholder (e.g., *View it on Vercel/Netlify*)? It helps make your README more attractive for GitHub visitors.

>>>>>>> ade235b4090bcb5661c0af8f96cdb5eb046cc4f2
