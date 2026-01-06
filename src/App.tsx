import { useState, type CSSProperties } from "react";
import "./App.css";

export function App() {
  const [maxOffset, setMaxOffset] = useState(200);
  const [maxRotation, setMaxRotation] = useState(14);
  const [minScale, setMinScale] = useState(0.55);
  const [transformOrder, setTransformOrder] = useState("trs");

  const wrapperStyle = {
    "--max-offset": `${maxOffset}px`,
    "--max-rotation": `${maxRotation}deg`,
    "--min-scale": minScale,
  } as CSSProperties;

  return (
    <main className="root">
      <div className="controls">
        <label>
          Offset: {maxOffset}px
          <input
            type="range"
            min="0"
            max="500"
            value={maxOffset}
            onChange={(e) => setMaxOffset(Number(e.target.value))}
          />
        </label>
        <label>
          Rotation: {maxRotation}°
          <input
            type="range"
            min="0"
            max="45"
            value={maxRotation}
            onChange={(e) => setMaxRotation(Number(e.target.value))}
          />
        </label>
        <label>
          Min Scale: {minScale.toFixed(2)}
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={minScale}
            onChange={(e) => setMinScale(Number(e.target.value))}
          />
        </label>
        <label>
          Transform Order
          <select
            value={transformOrder}
            onChange={(e) => setTransformOrder(e.target.value)}
          >
            <option value="trs">translate → rotate → scale</option>
            <option value="rts">rotate → translate → scale</option>
            <option value="str">scale → translate → rotate</option>
            <option value="srt">scale → rotate → translate</option>
            <option value="rst">rotate → scale → translate</option>
            <option value="tsr">translate → scale → rotate</option>
          </select>
        </label>
      </div>
      <div className="swipe-deck-wrapper" style={wrapperStyle} data-order={transformOrder}>
        {Array.from({ length: 6 }, (_, k) => {
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
