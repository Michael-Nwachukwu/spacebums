"use client";

// import { useAccount } from "wagmi";
import { DashboardContent } from "./_components/dashboard-content";
import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <>
      <DashboardContent />
    </>
  );
};

export default Dashboard;
