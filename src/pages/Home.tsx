import lookup from "country-code-lookup";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { tabFilters } from "../constants/tabFilters";
import { IoCalendarOutline } from "react-icons/io5";
import { HiChevronLeft, HiChevronRight, HiChevronUp } from "react-icons/hi2";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { data } from "../constants/data";
import dayjs from "dayjs";
import Sidebar from "../components/Sidebar";
import { TournamentData } from "../models/TournamentData";
import { Link } from "react-router-dom";

export default function Home() {
  const [myData] = useState<TournamentData[]>(data);
  const [active] = useState<string>("ALL");
  const date = new Date();

  return (
    <main className="bg-color-support-1 dark:bg-color-combination-1 dark:text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-5 gap-5 px-4 py-6 sm:px-8">
        {/* SIDEBAR */}
        <Sidebar />
        {/* MAIN CONTENT */}
        <div className="col-span-5 rounded-lg bg-white dark:bg-color-secondary-2  md:col-span-4">
          <section className="flex items-center justify-between px-4 py-5">
            <div className="flex flex-wrap items-center gap-2">
              {tabFilters.map((tabFilter) => (
                <button
                  className={`rounded-lg px-3 py-2 text-xs font-semibold uppercase  transition ${
                    active === tabFilter
                      ? "cursor-default bg-color-primary-1 text-white"
                      : "bg-color-support-1 text-color-support-4 hover:bg-color-support-2 dark:bg-color-secondary-1 dark:text-color-support-2 dark:hover:bg-color-support-4"
                  }`}
                >
                  {tabFilter}
                </button>
              ))}
            </div>
            <div className="hidden items-center overflow-hidden rounded-l-lg rounded-r-lg border border-color-support-1 text-color-support-4 dark:border-none dark:bg-color-secondary-1 dark:text-color-support-2 sm:flex">
              <button className="p-2 transition hover:bg-color-support-1 dark:hover:bg-color-support-4">
                <HiChevronLeft />
              </button>
              <button className="flex items-center gap-2 p-2 text-xs font-semibold uppercase transition hover:bg-color-support-1 dark:hover:bg-color-support-4">
                <IoCalendarOutline className="h-4 w-4" />
                {dayjs(date).format("MM/DD dd")}
              </button>
              <button className="p-2 transition hover:bg-color-support-1 dark:hover:bg-color-support-4">
                <HiChevronRight />
              </button>
            </div>
          </section>
          <section className="px-4 pb-5">
            <div className="w-full">
              <div className="mx-auto grid w-full gap-1 rounded-2xl">
                {myData.map((item) => {
                  const nestedObject = item[Object.keys(item)[0]];
                  const participantIds = Object.keys(
                    nestedObject.event_participants
                  );

                  return Object.values(item).map((nestedObject) => {
                    const matchId = nestedObject.id;
                    const tournamentStageName =
                      nestedObject.tournament_stage_name;
                    const statusType = nestedObject.status_type;
                    const participantName1 =
                      nestedObject.event_participants[
                        Object.keys(nestedObject.event_participants)[0]
                      ].participant.name;
                    const participantName2 =
                      nestedObject.event_participants[
                        Object.keys(nestedObject.event_participants)[1]
                      ].participant.name;
                    const countryName =
                      nestedObject.event_participants[
                        Object.keys(nestedObject.event_participants)[0]
                      ].participant.country_name;

                    const participant1FinalResult =
                      nestedObject.event_participants[
                        Object.keys(nestedObject.event_participants)[0]
                      ].result[
                        Object.keys(
                          nestedObject.event_participants[
                            Object.keys(nestedObject.event_participants)[0]
                          ].result
                        )[0]
                      ].value;
                    const participant2FinalResult =
                      nestedObject.event_participants[
                        Object.keys(nestedObject.event_participants)[1]
                      ].result[
                        Object.keys(
                          nestedObject.event_participants[
                            Object.keys(nestedObject.event_participants)[1]
                          ].result
                        )[1]
                      ].value;

                    return (
                      <Disclosure defaultOpen>
                        {({ open }) => (
                          <div key={nestedObject.id}>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-color-favorite p-2 text-left text-sm font-medium text-color-support-4 focus:outline-none focus-visible:ring focus-visible:ring-color-favorite focus-visible:ring-opacity-75 dark:bg-color-secondary-3 dark:text-color-support-1">
                              <div className="flex items-center">
                                <IoStar className="h-5 w-5 text-color-yellow-1" />
                                <img
                                  src={`https://flagsapi.com/${
                                    countryName === "England" ||
                                    countryName === "Wales"
                                      ? "GB"
                                      : countryName === "USA"
                                      ? "US"
                                      : countryName === "Czechia"
                                      ? "CZ"
                                      : countryName === "Turkiye"
                                      ? "TR"
                                      : lookup.byCountry(countryName)?.iso2
                                  }/flat/64.png`}
                                  className="mx-4 h-6 w-6"
                                />
                                <span className="mr-2 text-xs font-semibold uppercase">
                                  {countryName}:
                                </span>
                                <span className="text-xs font-semibold">
                                  {tournamentStageName}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="cursor-pointer text-xs underline hover:no-underline">
                                  Standings
                                </span>
                                <HiChevronUp
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-color-support-4 dark:text-color-support-1`}
                                />
                              </div>
                            </Disclosure.Button>
                            <Link to={`match/${matchId}`}>
                              <Disclosure.Panel className="mb-2 flex cursor-pointer items-center justify-between border-b px-2 py-2 text-xs text-gray-500 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">
                                <div className="flex items-center">
                                  <IoStarOutline className="h-5 w-5" />
                                  <span className="w-28 px-4 capitalize">
                                    {statusType === "notstarted"
                                      ? "not started"
                                      : statusType}
                                  </span>
                                  <div>
                                    <div className="py-1 text-xs">
                                      {participantName1}
                                    </div>
                                    <div className="py-1 text-xs">
                                      {" "}
                                      {participantName2}
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 grid-rows-2">
                                  <div className="px-4 py-1 text-xs font-semibold">
                                    {participant1FinalResult}
                                  </div>
                                  <div className="px-4 py-1 text-xs font-semibold">
                                    {participant2FinalResult}
                                  </div>
                                </div>
                              </Disclosure.Panel>
                            </Link>
                          </div>
                        )}
                      </Disclosure>
                    );
                  });
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
