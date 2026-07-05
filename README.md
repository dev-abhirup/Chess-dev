# Premium Chess

A beautiful, modern, and highly responsive chess application built with Angular and Angular Material, featuring an engine integration with the Stockfish REST API.

## Features

- **Game Modes**:
  - **Play Against a Friend**: Play local multiplayer on the same browser screen.
  - **Play Against the Computer**: Play against Stockfish with 5 selectable difficulty levels.
- **Engine Integration**: Powered by the [Stockfish REST API](https://stockfish.online/) to compute best moves dynamically.
- **Modern UI & Aesthetic**:
  - Deep midnight navy (`#152232`) and crimson red (`#c42f40`) board styling.
  - Modern typography powered by the premium *PP Nikkei Maru* font (with *Nunito* as a high-quality fallback).
  - Glowing translucent green dots for achievable moves and rings for capture targets.
  - Pulsing amber-gold indicator animations for checked kings to maintain high contrast and visibility.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop screens with a fluid adaptive layout.

## Technologies Used

- **Framework**: Angular (v16)
- **UI Components**: Angular Material
- **Styles**: Vanilla CSS + SCSS
- **HTTP Client**: RxJS & HttpClient for API requests
- **Engine API**: Stockfish REST API

## Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd Chess
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`.

## Deployment

This project is configured for easy deployment on **Vercel** or **GitHub Pages**.

### Deploying to Vercel

1. Install the Vercel CLI or import the repository directly on the [Vercel Dashboard](https://vercel.com).
2. Configure the build settings:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/chess-game` or `dist/` (depending on the build path in `angular.json`)
3. Click deploy!
