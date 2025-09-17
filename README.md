# 🏏 Cricket Match Feed App

A React Native app that simulates a live cricket commentary feed.  
The app generates events like BALL, BOUNDARY, WICKET, and MATCH STATUS and updates the UI in real-time with a sports-style scoreboard and live commentary feed.  


## ✨ Features

- Live Feed Simulation – Events (Ball, Boundary, Wicket, Match Status) appear in sequence.  
- Scoreboard Header – Stylish scoreboard showing Score, Overs, and Innings.  
- Event Highlights –  
  - Boundary: Green highlight with emphasis.  
  - Wicket: Red bold alert.  
  - Ball: Normal commentary.  
- 📢 Match Status Context Change –  
  - Displays a banner when innings end (`"Team A finishes on 175/7"`)  
  - Resets scoreboard for the next innings.  
  - Updates match context (e.g., Innings Break, Match Over).  
- 🔄 Auto Event Sequencing – Events occur in order:  
  `BALL → BOUNDARY → WICKET → MATCH_STATUS → repeat`.  
-  Sports Vibe UI – Dark green scoreboard, highlighted runs/wickets, and banner alerts.  

---

## 📂 Project Structure

├── App.tsx # Root component
├── components
│ └── MatchFeed.tsx # UI for scoreboard + commentary feed
└── src
└── hooks
└── useMatchFeed.ts # Custom hook managing match state + events

## How to run
1. `yarn install` or `npm install`
2. After successful setting up react native and cloning this repository you can run `npm install` and then go to ios folder using command using `cd ios` and run `pod install` and then `npx react-native run-ios` for IOS and `npx react-native run-Android` for Android to start the application on a simulator / emulator.

## Future Improvements

--Add team names & logos.
--Integrate with a real cricket API for live scores.
--Add animations (boundary fireworks, wicket shake).
--Show match summary card when the game ends.

# Simulating the Real-Time Stream 
 Since no actual API or WebSocket is provided, i have mock the data stream using JavaScript's setInterval to periodically push event objects into the component's state. This mimics real-time updates every few seconds (e.g., 2-5 seconds). In a real scenario, replacing this with a WebSocket connection (e.g., via Socket.io) or an API polling mechanism.
