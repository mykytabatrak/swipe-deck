import type { CSSProperties } from "react";
import "./App.css";

export function App() {
  return (
    <main className="root">
      <div className="swipe-deck-wrapper-v2">
        {Array.from({ length: 6 }, (_, k) => {
          return (
            <div
              key={k}
              style={{ "--index": k + 1 } as CSSProperties}
              className="swipe-deck-card-v2"
            >
              <span></span>
            </div>
          );
        })}
      </div>

      <div className="swipe-deck-wrapper">
        {Array.from({ length: 20 }, (_, k) => {
          return (
            <div
              key={k}
              style={{ "--index": k + 1 } as CSSProperties}
              className="swipe-deck-card"
            >
              <span></span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
