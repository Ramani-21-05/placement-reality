"use client";

import { useEffect, useState } from "react";

export default function Roadmap({ refresh }: any) {

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");
    if (!saved) return;

    const profile = JSON.parse(saved);

    let repos = profile.githubData?.public_repos || 0;

    let totalProblems = 0;
    if (profile.leetcodeData) {
      totalProblems =
        profile.leetcodeData.easy +
        profile.leetcodeData.medium +
        profile.leetcodeData.hard;
    }

    const roadmap: string[] = [];

    if (repos < 10) {
      roadmap.push(`Build ${10 - repos} more projects`);
    }

    if (totalProblems < 200) {
      roadmap.push(`Solve ${200 - totalProblems} more DSA problems`);
    }

    if (roadmap.length === 0) {
      roadmap.push("You are placement ready 🚀");
    }

    setSuggestions(roadmap);

  }, [refresh]);

  return (
    <div className="mt-6 border p-6 bg-white text-black rounded-lg shadow">

      <h2 className="text-xl font-bold text-green-700">
        Improvement Roadmap
      </h2>

      {suggestions.map((s, i) => (
        <p key={i}>👉 {s}</p>
      ))}

    </div>
  );
}