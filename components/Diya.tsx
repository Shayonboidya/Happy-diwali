import { useId } from "react";

type Props = { size?: number; className?: string };

/** Traditional clay diya drawn in SVG with a flickering two-layer flame. */
export default function Diya({ size = 160, className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 200 150" width={size} height={size * 0.75} role="img"
      aria-label="A glowing clay diya with a flickering flame" className={className} overflow="visible"
    >
      <defs>
        <radialGradient id={`g${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb347" stopOpacity=".85" />
          <stop offset="45%" stopColor="#ff7a1a" stopOpacity=".28" />
          <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8873a" />
          <stop offset="55%" stopColor="#b3501c" />
          <stop offset="100%" stopColor="#6e2a0e" />
        </linearGradient>
        <linearGradient id={`f${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ff5a0a" />
          <stop offset="55%" stopColor="#ffa31a" />
          <stop offset="100%" stopColor="#fff1a8" />
        </linearGradient>
      </defs>
      <circle className="diya-glow" cx="100" cy="62" r="92" fill={`url(#g${id})`} style={{ transformOrigin: "100px 62px" }} />
      <path className="flame" d="M100 4C120 36 128 56 100 78C72 56 80 36 100 4Z" fill={`url(#f${id})`} />
      <path className="flame flame-inner" d="M100 36C109 52 112 62 100 76C88 62 91 52 100 36Z" fill="#fffbe0" opacity=".95" />
      <rect x="97" y="72" width="6" height="14" rx="3" fill="#2a1408" />
      <path d="M14 86Q100 70 186 86Q178 134 100 140Q22 134 14 86Z" fill={`url(#b${id})`} />
      <ellipse cx="100" cy="86" rx="86" ry="11" fill="#f5a04a" />
      <ellipse cx="100" cy="87" rx="70" ry="7" fill="#3a1608" />
      {[44, 72, 100, 128, 156].map((x, i) => (
        <circle key={x} cx={x} cy={108 + (i === 2 ? 6 : i % 2 === 0 ? 0 : 3)} r="3.2" fill="#ffd978" />
      ))}
      <path d="M40 98Q100 116 160 98" fill="none" stroke="#ffd978" strokeWidth="1.6" opacity=".7" />
    </svg>
  );
}
