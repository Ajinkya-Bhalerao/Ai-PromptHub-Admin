import React, { FC } from "react";
import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllWithdrawRequests from "@/components/Admin/AllWithdrawRequests";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="Ai-PromptHub - Admin"
        description="Ai prompt selling marketplace"
        keywords="Final Project"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="Withdraw requests" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllWithdrawRequests />
        </div>
      </div>
    </div>
  );
};

export default Page;
