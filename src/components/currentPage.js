import React from "react";
import { useSelector } from "react-redux";

export default function CurrentPage({ currentPage }) {
  const resume = useSelector((s) => s.resume);
  const {page}=resume
  const pages = [
    "Profile Section",
    "Education Section",
    "Skills Sector",
    "Mini Project",
    "Social",
  ];

  return (
    <div className="currentPages">
      {pages.map((title, index) => (
        <div className="currentPage" key={index}>
          <div
            className={`currentPage-id ${
              index === page ? "active" : ""
            }`}
          >
            {index + 1}
          </div>
          <div className="currentPage-name">{title}</div>
          {index < pages.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
}
