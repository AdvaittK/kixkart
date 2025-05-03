"use client"

import { useEffect, useState } from "react"

// Types for our data streams
type DataStream = {
  id: number
  position: number
  speed: number
  direction: "left" | "right"
  content: string
  opacity: number
}

// Generate random binary/hex-looking strings
const generateRandomData = (length: number) => {
  const chars = "01010101110001101010101010111000110011001010101110";
  let result = "";
  
  for (let i = 0; i < length; i++) {
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    result += randomChar;
  }
  
  return result;
};

export default function CyberpunkDataStreams() {
  const [streams, setStreams] = useState<DataStream[]>([]);

  useEffect(() => {
    // Create 8 random data streams
    const dataStreams: DataStream[] = [];
    for (let i = 0; i < 8; i++) {
      dataStreams.push({
        id: i,
        position: Math.random() * 80 + 10, // Random position between 10-90% of viewport height
        speed: Math.random() * 80 + 20, // Animation duration between 20-100s
        direction: Math.random() > 0.5 ? "left" : "right",
        content: generateRandomData(50), // Random data string
        opacity: Math.random() * 0.2 + 0.1  // Random opacity between 0.1-0.3
      });
    }
    setStreams(dataStreams);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Scanning line effect */}
      <div className="scan-line"></div>
      
      {/* Data streams */}
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="float-data"
          style={{
            top: `${stream.position}%`,
            opacity: stream.opacity,
            animation: `${stream.direction === "left" ? "float-data-left" : "float-data-right"} ${stream.speed}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        >
          {stream.content}
        </div>
      ))}

      {/* Glowing corner accents */}
      <div className="fixed top-0 left-0 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-10 h-px bg-primary/30"></div>
        <div className="absolute top-0 left-0 w-px h-10 bg-primary/30"></div>
      </div>
      
      <div className="fixed top-0 right-0 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-10 h-px bg-primary/30"></div>
        <div className="absolute top-0 right-0 w-px h-10 bg-primary/30"></div>
      </div>
      
      <div className="fixed bottom-0 left-0 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-10 h-px bg-primary/30"></div>
        <div className="absolute bottom-0 left-0 w-px h-10 bg-primary/30"></div>
      </div>
      
      <div className="fixed bottom-0 right-0 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-10 h-px bg-primary/30"></div>
        <div className="absolute bottom-0 right-0 w-px h-10 bg-primary/30"></div>
      </div>
      
      {/* Glowing center accent */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none opacity-10">
        <div className="absolute inset-0 border border-primary rounded-full glow-pulse" style={{ transform: "scale(0.8)" }}></div>
        <div className="absolute inset-0 border border-primary rounded-full glow-pulse" style={{ transform: "scale(0.6)" }}></div>
      </div>
    </div>
  );
}