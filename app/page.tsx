"use client";
import Sidebar from "@/app/(components)/Sidebar";
import Dashboard from "@/app/(components)/Dashboard";
import Navbar from "@/app/(components)/Navbar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <Dashboard />
      </div>
    </main>
  );
}
