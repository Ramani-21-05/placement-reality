"use client";

import { useState } from "react";
import StudentProfile from "@/components/StudentProfile";
import GithubStats from "@/components/GithubStats";
import LeetCodeStats from "@/components/LeetCodeStats";
import Dashboard from "@/components/Dashboard";
import ReadinessScore from "@/components/ReadinessScore";
import CompanyMatch from "@/components/CompanyMatch";
import Roadmap from "@/components/Roadmap";

export default function Home() {

  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Create Your Placement Profile
      </h1>

      <StudentProfile onSave={triggerRefresh} />
      <GithubStats refresh={refresh} />
      <LeetCodeStats refresh={refresh} />
      <Dashboard refresh={refresh} />
      <ReadinessScore refresh={refresh} />
      <CompanyMatch refresh={refresh} />
      <Roadmap refresh={refresh} />
    </main>
  );
}