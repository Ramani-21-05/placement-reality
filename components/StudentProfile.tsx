"use client";

import { useEffect } from "react";

export default function StudentProfile() {

  const handleSave = () => {
    const profile = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      year: (document.getElementById("year") as HTMLSelectElement).value,
      branch: (document.getElementById("branch") as HTMLSelectElement).value,
      companies: (document.getElementById("companies") as HTMLInputElement).value,
      github: (document.getElementById("github") as HTMLInputElement).value,
      leetcode: (document.getElementById("leetcode") as HTMLInputElement).value
    };

    localStorage.setItem("studentProfile", JSON.stringify(profile));
    alert("Profile Saved!");
  };

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    if (saved) {
      const data = JSON.parse(saved);

      (document.getElementById("name") as HTMLInputElement).value = data.name || "";
      (document.getElementById("year") as HTMLSelectElement).value = data.year || "";
      (document.getElementById("branch") as HTMLSelectElement).value = data.branch || "";
      (document.getElementById("companies") as HTMLInputElement).value = data.companies || "";
      (document.getElementById("github") as HTMLInputElement).value = data.github || "";
      (document.getElementById("leetcode") as HTMLInputElement).value = data.leetcode || "";
    }
  }, []);

  return (
    <div className="space-y-4 border p-4">

      <input
        id="name"
        placeholder="Enter Name"
        className="border p-2 w-full"
      />

      <select id="year" className="border p-2 w-full">
        <option value="">Select Year</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>

      <select id="branch" className="border p-2 w-full">
        <option value="">Select Branch</option>
        <option>CSE</option>
        <option>AI & DS</option>
        <option>IT</option>
      </select>

      <input
        id="companies"
        placeholder="Target Companies"
        className="border p-2 w-full"
      />

      <input
        id="github"
        placeholder="GitHub Username"
        className="border p-2 w-full"
      />
      <input
  id="leetcode"
  placeholder="LeetCode Username"
  className="border p-2 w-full"
/>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Save Profile
      </button>

    </div>
  );
}