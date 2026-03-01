"use client";

import { useEffect, useState } from "react";

export default function Dashboard({ refresh }: any) {

  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const loadProfile = () => {
      const saved = localStorage.getItem("studentProfile");

      if (saved) {
        setProfile(JSON.parse(saved));
      }
    };

    loadProfile();
  }, [refresh]);

  if (!profile) {
    return (
      <div className="mt-6 border p-4 bg-gray-100">
        <p>No profile data yet</p>
      </div>
    );
  }

  return (
    <div className="mt-6 border p-6 bg-gray-100 text-black rounded-lg shadow">

    <h2 className="text-xl font-bold mb-3 text-blue-600"></h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Year:</strong> {profile.year}</p>
      <p><strong>Branch:</strong> {profile.branch}</p>
      <p><strong>Target:</strong> {profile.companies}</p>

    </div>
  );
}