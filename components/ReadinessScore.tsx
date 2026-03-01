"use client";

import { useEffect, useState } from "react";

export default function ReadinessScore({ refresh }: any) {

  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    if (!saved) return;

    const profile = JSON.parse(saved);

    let githubScore = 0;
    let leetcodeScore = 0;

    // GitHub Score
    if (profile.githubData) {
      const repos = profile.githubData.public_repos || 0;
      githubScore = Math.min((repos / 10) * 50, 50);
    }

    // LeetCode Score
    if (profile.leetcodeData) {
      const total =
        profile.leetcodeData.easy +
        profile.leetcodeData.medium +
        profile.leetcodeData.hard;

      leetcodeScore = Math.min((total / 200) * 50, 50);
    }

    setScore(Math.round(githubScore + leetcodeScore));

  }, [refresh]);

  if (score === null) return null;

  return (
    <div className="mt-6 border p-6 bg-white text-black rounded-lg shadow">
      <h2 className="text-xl font-bold text-green-600">
        Placement Readiness Score
      </h2>
      <p className="text-3xl font-bold mt-2">{score}%</p>
    </div>
  );
}
