"use client";

import { useEffect, useState } from "react";

export default function GithubStats({ refresh }: any) {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const saved = localStorage.getItem("studentProfile");

    if (saved) {
      const profile = JSON.parse(saved);

      if (profile.github) {
        fetch(`https://api.github.com/users/${profile.github}`)
          .then(res => res.json())
          .then(result => {

            setData(result);

            // Save GitHub data for readiness score
            const saved = localStorage.getItem("studentProfile");
            if (saved) {
              const updated = JSON.parse(saved);
              updated.githubData = result;
              localStorage.setItem("studentProfile", JSON.stringify(updated));
            }

          });
      }
    }

  }, [refresh]);

  if (!data) return null;

  return (
    <div className="mt-6 border p-6 bg-white text-black rounded-lg shadow">
      <h2 className="text-xl font-bold text-blue-600">
        GitHub Stats
      </h2>
      <p>Public Repos: {data.public_repos}</p>
      <p>Followers: {data.followers}</p>
    </div>
  );
}