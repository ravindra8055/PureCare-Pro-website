---
title: PureCare Pro
emoji: 🧹
colorFrom: blue
colorTo: green
sdk: docker
pinned: false
---

# PureCare Pro - Professional Cleaning Services

PureCare Pro is a modern, responsive Content Management System (CMS) and business website designed for professional cleaning services. It specializes in water tank cleaning, sewage treatment plant (STP) maintenance, and deep home cleaning.

## 🚀 Features

*   **Service Showcase:** Detailed pages for Tank Cleaning, STP Maintenance, and Deep Cleaning.
*   **Area Directory:** SEO-friendly pages targeting specific service areas (e.g., "Tank Cleaning in Indiranagar").
*   **Dynamic Routing:** Smart routing for various service and location combinations.
*   **Responsive Design:** Fully responsive UI built with Tailwind CSS.
*   **Dark Mode:** Built-in dark mode support.
*   **Contact Forms:** Integrated contact and booking request forms.

## 🛠️ Tech Stack

*   **Frontend:** React (v19), TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router v7
*   **Deployment:** Docker / Nginx

## 🏃‍♂️ Run Locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🐳 Docker Deployment

This project includes a multi-stage `Dockerfile` optimized for production using Nginx.

```bash
# Build the image
docker build -t purecare-pro .

# Run the container
docker run -p 7860:7860 purecare-pro
```
