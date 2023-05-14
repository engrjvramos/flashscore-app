import { IoStar, IoCaretDownSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { myLeagues } from "../constants/myLeagues";
import { countryList } from "../constants/countryList";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const dataForDisplay = expanded ? countryList : countryList.slice(0, 30);

  return (
    <div className="hidden md:block">
      {/* MY LEAGUES */}
      <div className="divide-y">
        <div className="mb-2 flex items-center gap-2">
          <IoStar />
          <span className="text-xs font-semibold uppercase tracking-widest">
            My Leagues{" "}
          </span>
        </div>
        <ul className="py-3">
          {myLeagues.map((league) => (
            <li
              key={league.id}
              className="group flex cursor-pointer items-center gap-2 rounded p-2 transition hover:bg-gray-200 dark:hover:bg-color-support-4"
            >
              <img src={league.flag} className="h-3" />
              <span className="truncate text-xs">{league.name}</span>
              <IoStar className="ml-auto hidden text-color-yellow-1 group-hover:block" />
            </li>
          ))}
        </ul>
      </div>
      {/* MY TEAMS */}
      <div className="mt-4 divide-y">
        <div className="mb-2 flex items-center gap-2">
          <IoStar />
          <span className="text-xs font-semibold uppercase tracking-widest">
            My Teams{" "}
          </span>
        </div>
        <button className="flex w-full items-center py-2 text-xs font-semibold uppercase text-color-primary-1 transition hover:text-color-primary-2">
          <AiOutlinePlus className="mr-2 h-4 w-4" />
          ADD THE TEAM
        </button>
      </div>
      {/* COUNTRIES */}
      <div className="my-4 divide-y">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest">
            Countries{" "}
          </span>
        </div>
        <ul className="py-3">
          {dataForDisplay.map((country, index) => (
            <li
              key={index}
              className="group flex cursor-pointer items-center gap-2 rounded p-2 transition hover:bg-gray-200 dark:hover:bg-color-support-4"
            >
              <span className="truncate text-xs">{country}</span>
              <IoCaretDownSharp className="ml-auto hidden h-3 w-3 group-hover:block" />
            </li>
          ))}
          <button
            className="flex w-full items-center justify-between p-2 text-xs font-semibold transition hover:text-color-primary-1 active:text-color-primary-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
            {expanded ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </ul>
      </div>
    </div>
  );
}
