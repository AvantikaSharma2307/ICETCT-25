import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import Organisingcommittie from "../pages/Organisingcommittie";
import TechnicalCommitiee from "../pages/TechnicalCommitiee";
import AdvisoryCommitiee from "../pages/AdvisoryCommitiee";

export const ToggleTabs = ({ tabs, containerClassName, tabClassName }) => {
  const [activeTab, setActiveTab] = useState(null); // Track which tab is active

  const handleTabClick = (value) => {
    setActiveTab((prev) => (prev === value ? null : value)); // Toggle content visibility
  };

  return (
    <>
      {/* Tab Buttons */}
      <div
        className={cn(
          "flex sm:flex-row flex-col items-center justify-center overflow-x-auto lg:text-xl sm:overflow-x-visible max-w-full w-full",
          containerClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)} // Toggle active state
            className={cn(
              "relative text-xl px-6 m-2 sm:m-0 sm:px-10 py-3 sm:mx-6 rounded-full text-white bg-black dark:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg",
              tabClassName
            )}
          >
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 flex flex-col w-full items-center bg-slate-100 ">
  {tabs.map((tab) => (
    <motion.div
      key={tab.value}
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: activeTab === tab.value ? 1 : 0,
        height: activeTab === tab.value ? "auto" : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{
        overflow: "hidden",
      }}
      className="w-[100%] flex justify-center items-center "
    >
      {activeTab === tab.value && (
        <div className="p-4 flex justify-center items-center w-full shadow-md  rounded-md ">
          {tab.content}
        </div>
      )}
    </motion.div>
  ))}
</div>

    </>
  );
};

export default function Tabcomponent() {
  const tabs = [
    {
      title: "Organizing Committee",
      value: "organising",
      content: (
        <div>
          <Organisingcommittie />
        </div>
      ),
    },
    {
      title: "Technical Committee",
      value: "technical",
      content: (
        <div>
          <TechnicalCommitiee />
        </div>
      ),
    },
    {
      title: "Advisory Committee",
      value: "advisory",
      content: (
        <div>
          <AdvisoryCommitiee />
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col max-w-full mx-auto w-full items-start justify-start mt-32 overflow-hidden">
      <h1 className="text-4xl font-bold text-center w-full mb-10 text-black">Committees</h1>
      <ToggleTabs tabs={tabs} />
    </div>
  );
}
