import { useState, useEffect } from "react";
import { data } from "../constants/data";
import { useNavigate, useParams } from "react-router-dom";
import { TournamentData } from "../models/TournamentData";
import { IoFootballOutline, IoStarOutline, IoShield } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi2";
import { IoArrowBackSharp } from "react-icons/io5";

import lookup from "country-code-lookup";
import dayjs from "dayjs";

export default function Flashscore() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [myData, setMyData] = useState<TournamentData[]>([]);

  useEffect(() => {
    setMyData(data);
  }, [code]);

  console.log(myData);

  return (
    <main className="bg-color-support-1 dark:bg-color-combination-1 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        {myData.map((item, index) => {
          const nestedObject = item[Object.keys(item)[0]];
          const startDate = nestedObject.startdate;
          const sportName = nestedObject.sport_name;
          const tournamentName = nestedObject.tournament_stage_name;
          const gender =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[0]
            ].participant.gender;
          const statusType = nestedObject.status_type;
          const countryName =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[0]
            ].participant.country_name;
          const participantName1 =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[0]
            ].participant.name;
          const participantName2 =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[1]
            ].participant.name;
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
            <div key={index}>
              <div className="flex items-center gap-2 border-b border-color-support-2 pb-4 text-xs font-semibold uppercase tracking-wide text-color-support-4 dark:text-white">
                <IoFootballOutline className="h-5 w-5" />
                <span className="cursor-pointer hover:underline">
                  {sportName}
                </span>
                <HiChevronRight className="h-3 w-3" />
                <img
                  src={`https://flagsapi.com/${
                    countryName === "England" || countryName === "Wales"
                      ? "GB"
                      : countryName === "USA"
                      ? "US"
                      : countryName === "Czechia"
                      ? "CZ"
                      : countryName === "Turkiye"
                      ? "TR"
                      : lookup.byCountry(countryName)?.iso2
                  }/flat/64.png`}
                  className="h-5 w-5"
                />
                <p>
                  {countryName}:{" "}
                  <span className="cursor-pointer hover:underline">
                    {tournamentName}
                  </span>
                </p>
              </div>
              <div className="mt-6">
                <button
                  className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold uppercase shadow-md transition hover:bg-gray-200 dark:bg-color-secondary-1 dark:hover:bg-color-support-4"
                  onClick={() => navigate("/")}
                >
                  <IoArrowBackSharp className="mr-2 h-5 w-5" />
                  Back
                </button>
              </div>
              <div className="mt-12 grid grid-cols-1 place-content-center gap-x-6 gap-y-12 sm:grid-cols-4">
                <div className="flex flex-col items-center gap-y-6 sm:flex-row sm:justify-evenly">
                  <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-color-support-4 transition hover:bg-gray-300 hover:text-gray-700 active:bg-gray-400 active:text-gray-800 dark:text-white dark:hover:bg-slate-600 dark:active:bg-slate-700">
                    <IoStarOutline className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <div className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 p-8">
                      <IoShield className="h-12 w-12 text-blue-500" />
                    </div>
                    <div className="mt-4 text-color-support-4 dark:text-white">
                      <h1 className="cursor-pointer  hover:underline">
                        {participantName1}
                      </h1>
                      <h2 className="pb-1 pt-2 text-xs uppercase">{gender}</h2>
                      <span className="text-xs font-semibold uppercase">
                        {countryName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:col-span-2">
                  <span className="text-sm text-color-support-4 dark:text-white">
                    {dayjs(startDate).format("DD.MM.YYYY HH:MM")}
                  </span>
                  <div className="py-5 text-5xl">
                    <span>{participant1FinalResult}</span>
                    <span className="px-4">-</span>
                    <span>{participant2FinalResult}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase">
                    {statusType === "notstarted" ? "Not Started" : statusType}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-evenly gap-y-6 sm:flex-row">
                  <div className="text-center">
                    <div className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 p-8">
                      <IoShield className="h-12 w-12 text-red-500" />
                    </div>
                    <div className="mt-4 text-color-support-4 dark:text-white">
                      <h1 className="cursor-pointer  hover:underline">
                        {participantName2}
                      </h1>
                      <h2 className="pb-1 pt-2 text-xs uppercase">{gender}</h2>
                      <span className="text-xs font-semibold uppercase">
                        {countryName}
                      </span>
                    </div>
                  </div>
                  <div className=" flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-color-support-4 transition hover:bg-gray-300 hover:text-gray-700 active:bg-gray-400 active:text-gray-800 dark:text-white dark:hover:bg-slate-600 dark:active:bg-slate-700">
                    <IoStarOutline className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* {myData.map((item) => {
          const nestedObject = item[Object.keys(item)[0]];
          const sportName = nestedObject.sport_name;
          const tournamentStageName = nestedObject.tournament_stage_name;
          const countryName =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[0]
            ].participant.country_name;

          const matchId = nestedObject.id;
          const statusType = nestedObject.status_type;
          const participantName1 =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[0]
            ].participant.name;
          const participantName2 =
            nestedObject.event_participants[
              Object.keys(nestedObject.event_participants)[1]
            ].participant.name;

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
            <div key={nestedObject.id}>
              <div>{nestedObject.name}</div>
              <div>{sportName}</div>
              <div>{participant2FinalResult}</div>
            </div>
          );
        })} */}
      </div>
    </main>
  );
}
