import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

export function Footer() { 
  // 🚀 Look for the correct key "stamp"
  const [stamp, setStamp] = useState(() => {
    const savedStamp = localStorage.getItem("stamp");
    return savedStamp ? JSON.parse(savedStamp) : {};
  });

  // Listen for the live update event
  useEffect(() => {
    const handleStorageUpdate = () => {
      const savedStamp = localStorage.getItem("stamp");
      setStamp(savedStamp ? JSON.parse(savedStamp) : {});
    };

    window.addEventListener("storageUpdated", handleStorageUpdate);
    
    return () => {
      window.removeEventListener("storageUpdated", handleStorageUpdate);
    };
  }, []);

  return (
    <div 
      className="fx fs2 p2"
      style={{
        height: "4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        bottom: "0px",
        left: "0px",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid silver",
        color: "white"
      }}
    >
      <button className="btn1 fs3">
        <BiMenu />
      </button>

      <div>
        {stamp.section && stamp.roll_number && stamp.name
          ? `${stamp.section}_${stamp.roll_number}_${stamp.name}`
          : "No stamp data found"} 
      </div>

      <button className="btn1 fs3">
        <BiMenu />
      </button>
    </div>
  );
}
