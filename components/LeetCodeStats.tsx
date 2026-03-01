"use client";

import { useEffect, useState } from "react";

export default function LeetCodeStats({ refresh }: any) {

  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    if (saved) {
      const profile = JSON.parse(saved);

      if (profile.leetcode) {

        fetch("/api/leetcode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: profile.leetcode
          })
        })
        .then(res => res.json())
        .then(data => {

          const stats = data?.data?.matchedUser?.submitStats?.acSubmissionNum;
          setStats(stats);

          const easy = stats?.find((s: any) => s.difficulty === "Easy")?.count || 0;
          const medium = stats?.find((s: any) => s.difficulty === "Medium")?.count || 0;
          const hard = stats?.find((s: any) => s.difficulty === "Hard")?.count || 0;

          // Save for readiness score
          const saved = localStorage.getItem("studentProfile");
          if (saved) {
            const updated = JSON.parse(saved);
            updated.leetcodeData = { easy, medium, hard };
            localStorage.setItem("studentProfile", JSON.stringify(updated));
          }

        });
      }
    }
  }, [refresh]);

  if (!stats) return null;

  const easy = stats.find((s: any) => s.difficulty === "Easy")?.count || 0;
  const medium = stats.find((s: any) => s.difficulty === "Medium")?.count || 0;
  const hard = stats.find((s: any) => s.difficulty === "Hard")?.count || 0;

  return (
    <div className="mt-6 border p-6 bg-white text-black rounded-lg shadow">
      <h2 className="text-xl font-bold text-purple-600">
        LeetCode Stats
      </h2>
      <p>Easy: {easy}</p>
      <p>Medium: {medium}</p>
      <p>Hard: {hard}</p>
    </div>
  );
}