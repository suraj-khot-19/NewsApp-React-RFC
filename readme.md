# News App 📰

A simple and responsive news app built using **`React`** and **`Webpack`**, fetching real-time news using the [News API](https://newsapi.org/).

## Features ✨

- Displays breaking news from various categories.
- Search functionality to find articles.
- Fully responsive design for all devices.
- Dynamic routing for viewing news categories or individual articles.

---

## Installation and Setup 🚀

### 1) Prerequisites

- Node.js and npm installed on your machine.

### 2) Clone the Repository

```bash
git clone https://github.com/your-username/news-app.git
cd news-app
```

### 3) Install Dependencies

```bash
npm install
```

### 4) Run the Development Server

```bash
npm start
```

---

## News API Configuration 🛠️

This app uses the News API for fetching real-time news.
To run the app, you need to:

- Sign up on News API and get your API key.

- Create a .env file in the project root with the following:

    ```makefile
        REACT_APP_NEWS_API_KEY=your_api_key
    ```

---

## Proxy Setup for Local Testing

Since the News API is restricted to testing locally, a backend proxy is used. To set it up:

1. Navigate to the `server` folder:

    ```bash
    cd server
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Start the backend server

    ```bash
    node server.js
    ```

---

## Technologies Used 🛠️

**Frontend**: React.js

**Bundler**: Webpack

**Styling**: CSS (or specify your chosen framework)

**Backend Proxy**: Node.js, Express.js (optional)

---

## Enhancements and Future Plans 🌟

- Add infinite scrolling for seamless browsing.

- Include light/dark mode toggle.

- Use a better API for deployment purposes.

- Add offline mode with service workers.

---

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request.
