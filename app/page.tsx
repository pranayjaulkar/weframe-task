"use client";
import Sidebar from "@/app/(components)/Sidebar";
import Dashboard from "@/app/(components)/Dashboard";
import Navbar from "@/app/(components)/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
