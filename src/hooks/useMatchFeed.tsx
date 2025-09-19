import { useEffect, useReducer } from "react";

type EventType = "BALL" | "BOUNDARY" | "WICKET" | "MATCH_STATUS" | "BATSMAN_UPDATE" | "UNKNOWN";
interface Event { 
  type: EventType; 
  payload: any; 
}
interface Batsman {
  name: string;
  runs: number;
}
interface State { 
  score: number; 
  wickets: number; 
  balls: number; 
  overs: number; 
  feed: Event[]; 
  matchStatus?: string;
  innings: number;
  striker?: Batsman;
  nonStriker?: Batsman;
}

const initialState: State = { 
  score: 0, 
  wickets: 0, 
  balls: 0, 
  overs: 0, 
  feed: [],
  innings: 0
};

let eventIndex = 0;

function matchReducer(state: State, action: Event): State {
  switch (action.type) {
    case "BALL":
    case "BOUNDARY": {
      const newBalls = state.balls + 1;
      return {
        ...state,
        score: state.score + action.payload.runs,
        balls: newBalls,
        overs: parseFloat(calculateOvers(newBalls)),
        feed: [action, ...state.feed],
      };
    }
    case "WICKET": {
      const newBalls = state.balls + 1;
      return {
        ...state,
        wickets: state.wickets + 1,
        balls: newBalls,
        overs: parseFloat(calculateOvers(newBalls)),
        feed: [action, ...state.feed],
      };
    }
    case "MATCH_STATUS": {
      // Reset after innings break
      if (action.payload.status === "Innings Break") {
        return {
          ...state,
          score: 0,
          wickets: 0,
          balls: 0,
          overs: 0,
          innings: state.innings + 1,
          matchStatus: action.payload.summary,
          feed: [action, ...state.feed],
        };
      }
      // if (action.payload.summary?.includes("finishes on")) {
      //   return {
      //     ...state,
      //     score: 0,
      //     wickets: 0,
      //     balls: 0,
      //     overs: 0,
      //     innings: state.innings + 1,
      //     feed: [action], // start fresh with just this status
      //     matchStatus: action.payload.summary,
      //   };
      // }
      return {
        ...state,
        matchStatus: action.payload.summary,
        feed: [action, ...state.feed],
      };
    }
    case "BATSMAN_UPDATE": {
      
      return {
        ...state,
        striker: action.payload.striker,
        nonStriker: action.payload.nonStriker,
        feed: [action, ...state.feed],
      }
    }
    
    default:
      return {
        ...state,
        feed: [
          { type: "UNKNOWN", payload: { commentary: "Unknown event" } },
          ...state.feed,
        ],
      };
  }
}

function getRandomEvent(): Event {
  const events: Event[] = [
    { type: "BALL", payload: { runs: 1, commentary: "Pushed to mid-on for a quick single +1" } },
    { type: "BOUNDARY", payload: { runs: 4, commentary: "Classic cover drive, races to the boundary!" } },
    { type: "WICKET", payload: { playerOut: "R. Sharma", dismissal: "LBW", commentary: "Big appeal... and OUT!😔" } },
    { type: "MATCH_STATUS", payload: { status: "Innings Break", summary: "Team A finishes on 175/7." } },
    { type: "BATSMAN_UPDATE", payload: { striker: { name: "Kohli", runs: 45 },  nonStriker: { name: "Hardik", runs: 32 } } },
    // { type: "UNKNOWN", payload: { commentary: "An unexpected event occurred." } }, // For testing unknown events
  ];

  const event = events[eventIndex]; //current event
  eventIndex = (eventIndex + 1) % events.length; // cycle through events
  return event;
  
  // return events[Math.floor(Math.random() * events.length)]; // random event
};

function calculateOvers(balls: number): string {
  const overs = Math.floor(balls / 6);
  const ballsInOver = balls % 6;
  return `${overs}.${ballsInOver}`;
}

export function useMatchFeed() {
  const [state, dispatch] = useReducer(matchReducer, {
    ...initialState,
    innings: 1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getRandomEvent());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return state;
}
