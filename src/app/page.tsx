'use client';

import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const SchoolDashboard = () => {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white border-r">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 mb-6"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-lg">HappySchool</span>
        </Link>
        <Menu />
      </div>
      
      {/* RIGHT CONTENT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        
        {/* MAIN DASHBOARD CONTENT */}
        <div className="p-4 flex gap-4 flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* USER CARDS */}
            <div className="flex gap-4 justify-between flex-wrap">
              <UserCard type="student" />
              <UserCard type="teacher" />
              <UserCard type="parent" />
              <UserCard type="staff" />
            </div>
            {/* MIDDLE CHARTS */}
            <div className="flex gap-4 flex-col lg:flex-row">
              {/* COUNT CHART */}
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
              </div>
              {/* ATTENDANCE CHART */}
              <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChart />
              </div>
            </div>
            {/* BOTTOM CHART */}
            <div className="w-full h-[500px]">
              <FinanceChart />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="flex justify-between mb-4">
              
            </div>
            <EventCalendar />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
