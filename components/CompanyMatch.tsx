"use client";

import { useEffect, useState } from "react";

export default function CompanyMatch({ refresh }: any) {

  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");
    if (!saved) return;

    const profile = JSON.parse(saved);

    let githubScore = 0;
    let leetcodeScore = 0;

    if (profile.githubData) {
      const repos = profile.githubData.public_repos || 0;
      githubScore = Math.min((repos / 10) * 50, 50);
    }

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

  const companies = [
    { name: "TCS", threshold: 40 },
    { name: "Infosys", threshold: 45 },
    { name: "Zoho", threshold: 60 },
    { name: "Amazon", threshold: 80 }
  ];

  const ready = companies.filter(c => score >= c.threshold);
  const almost = companies.filter(c => score < c.threshold && score >= c.threshold - 10);
  const notReady = companies.filter(c => score < c.threshold - 10);

  return (
    <div className="mt-6 border p-6 bg-white text-black rounded-lg shadow">

      <h2 className="text-xl font-bold text-orange-600">
        Company Eligibility
      </h2>

      <p className="mt-3 font-semibold">Ready for:</p>
      {ready.map(c => <p key={c.name}>✔ {c.name}</p>)}

      <p className="mt-3 font-semibold">Almost Ready:</p>
      {almost.map(c => <p key={c.name}>⚠ {c.name}</p>)}

      <p className="mt-3 font-semibold">Not Ready:</p>
      {notReady.map(c => <p key={c.name}>❌ {c.name}</p>)}

    </div>
  );
}