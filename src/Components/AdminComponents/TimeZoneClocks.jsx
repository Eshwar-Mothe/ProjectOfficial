// TimeZoneClocks.jsx
import React, { useEffect, useState } from 'react';

const timezones = [
  { label: "PACIFIC TIME", short: "PDT", offset: -7, color: "#F89734", utc: "UTC-7" },
  { label: "MOUNTAIN TIME", short: "MDT", offset: -6, color: "#13A047", utc: "UTC-6" },
  { label: "CENTRAL TIME", short: "CDT", offset: -5, color: "#F8BA34", utc: "UTC-5" },
  { label: "EASTERN TIME", short: "EDT", offset: -4, color: "#EF5C5C", utc: "UTC-4" },
];

const getTimeInOffset = (offset) => {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60000;
  const tzNow = new Date(utcNow + offset * 3600000);
  let h = tzNow.getHours();
  const m = tzNow.getMinutes();
  const s = tzNow.getSeconds();
  const ampm = h >= 12 ? "P.M." : "A.M.";
  h = h % 12; h = h ? h : 12;
  return {
    h, m, s, ampm,
    str: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} ${ampm}`,
  };
};

function TimeZoneClocks() {
  const [times, setTimes] = useState(() => timezones.map((tz) => getTimeInOffset(tz.offset)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes(timezones.map((tz) => getTimeInOffset(tz.offset)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', gap: '1rem', margin: "30px 0" }}>
      {timezones.map((tz, idx) => (
        <div style={{
          minWidth: 240, background: "#fff",
          border: `2px solid ${tz.color}`,
          borderRadius: 8, padding: 12,
          margin: "0 6px 12px 0", boxShadow: "0 0 6px #0001", className: 'container'
        }} key={tz.short}>
          <div style={{ fontWeight: "bold", color: tz.color }}>
            {tz.label} <small>({tz.short} {tz.utc})</small>
          </div>
          <div style={{
            fontSize: "1.6rem",
            fontFamily: "monospace",
            marginTop: 12,
            background: "#000",
            padding: "8px 0",
            borderRadius: 3,
            textAlign: "center",
            color: "white"
          }}>{times[idx].str}</div>
        </div>
      ))}
    </div>
  );
}

export default TimeZoneClocks;
