# Satellite Tracker Dashboard 🌍

This application visualizes the positions of man-made satellites orbiting Earth. It includes a map that displays satellite markers and a sidebar for satellite data exploration. Clicking on a satellite in the sidebar focuses the map on the selected satellite's position.

![Dashboard Screenshot](image.png)

## Features
- **Map Integration:** Displays satellite locations on an interactive 2D map using Maptiler SDK.
- **Satellite Data:** Fetches and processes live satellite data.
- **Fly-to Feature:** Automatically zooms the map to a satellite when clicked in the sidebar.
- **Responsive Dashboard:** Sidebar and map dynamically adjust to the screen.

---

## 🛠️ Technologies Used
- **React:** Frontend framework for UI development.
- **TypeScript:** Type safety and better development experience.
- **Maptiler SDK:** Interactive map rendering.
- **tle.js:** TLE (Two-Line Element) data parsing.
- **CSS:** Custom styling for the dashboard.

---

## 🚀 Running the App Locally

Follow these steps to run the app on your local machine:

### Prerequisites
- **Node.js:** Install [Node.js](https://nodejs.org/) (v14+ recommended).
- **Git:** Install [Git](https://git-scm.com/).
- **Maptiler API Key:** Obtain an API key from [Maptiler](https://www.maptiler.com/).

Replace 

### 1. Clone the Repository
```bash
git clone https://github.com/k20012691/satellite-tle
cd satellite-tle
