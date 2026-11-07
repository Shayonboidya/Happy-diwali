/** Rangoli-inspired mandala; purely decorative. */
export default function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" className={className} fill="none" stroke="#ffcf5a" strokeWidth=".5">
      {[0, 1, 2].map((ring) => {
        const n = 12 + ring * 6, r = 38 + ring * 22;
        return Array.from({ length: n }, (_, i) => (
          <ellipse key={`${ring}-${i}`} cx="0" cy={-r} rx={6 + ring * 2} ry={14 + ring * 3} transform={`rotate(${(360 / n) * i})`} />
        ));
      })}
      <circle r="30" /><circle r="94" strokeDasharray="1 4" /><circle r="98" />
    </svg>
  );
}
