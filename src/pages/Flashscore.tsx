import { useState } from "react";
import dataJSON from "../data/data.json";
import { useNavigate, useParams } from "react-router-dom";
import { TournamentData } from "../models/TournamentData";
import { IoFootballOutline, IoStarOutline, IoShield } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi2";
import { IoArrowBackSharp } from "react-icons/io5";
import lookup from "country-code-lookup";
import dayjs from "dayjs";

export default function Flashscore() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentMatchId] = useState<string>(id!);
  const [myData, setMyData] = useState<TournamentData[]>([]);

  const nObject =
    dataJSON.events[currentMatchId as keyof typeof dataJSON.events];

  const countryName =
    nObject.event_participants[
      Object.keys(
        dataJSON.events[currentMatchId as keyof typeof dataJSON.events]
          .event_participants
      )[0] as keyof typeof nObject.event_participants
    ].participant.country_name;

  const participantName1 =
    nObject.event_participants[
      Object.keys(
        nObject.event_participants
      )[0] as keyof typeof nObject.event_participants
    ].participant.name;
  const participantName2 =
    nObject.event_participants[
      Object.keys(
        nObject.event_participants
      )[1] as keyof typeof nObject.event_participants
    ].participant.name;

  const participant1FinalResult =
    nObject.event_participants[
      Object.keys(
        nObject.event_participants
      )[0] as keyof typeof nObject.event_participants
    ].result[
      Object.keys(
        nObject.event_participants[
          Object.keys(
            nObject.event_participants
          )[0] as keyof typeof nObject.event_participants
        ].result
      )[0]
    ].value;

  const participant2FinalResult =
    nObject.event_participants[
      Object.keys(
        nObject.event_participants
      )[1] as keyof typeof nObject.event_participants
    ].result[
      Object.keys(
        nObject.event_participants[
          Object.keys(
            nObject.event_participants
          )[1] as keyof typeof nObject.event_participants
        ].result
      )[1]
    ].value;

  return (
    <div className="bg-color-support-1 dark:bg-color-combination-1 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        <div>
          <div className="flex items-center justify-between border-b border-color-support-2 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-color-support-4 dark:text-white">
              <IoFootballOutline className="h-5 w-5" />
              <span className="cursor-pointer hover:underline">
                {nObject.sport_name}
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
                  {nObject.tournament_stage_name}
                </span>
              </p>
            </div>
            <div className="text-xs font-bold uppercase text-color-support-4 dark:text-white">
              Match id: {nObject.id}
            </div>
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
                  <h1
                    className={`cursor-pointer hover:underline ${
                      participant1FinalResult > participant2FinalResult
                        ? "font-bold text-color-primary-1"
                        : ""
                    }`}
                  >
                    {participantName1}
                  </h1>
                  <h2 className="pb-1 pt-2 text-xs uppercase">
                    {nObject.gender}
                  </h2>
                  <span className="text-xs font-semibold uppercase">
                    {countryName}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center sm:col-span-2">
              <h1 className="py-4 text-lg font-bold uppercase tracking-wide ">
                {nObject.name}
              </h1>
              <span className="text-sm text-color-support-4 dark:text-white">
                {dayjs(nObject.startdate).format("DD.MM.YYYY HH:MM")}
              </span>
              <div className="py-5 text-5xl">
                <span
                  className={`${
                    participant1FinalResult > participant2FinalResult
                      ? "font-bold text-color-primary-1"
                      : ""
                  }`}
                >
                  {participant1FinalResult}
                </span>
                <span className="px-4">-</span>
                <span
                  className={`${
                    participant2FinalResult > participant1FinalResult
                      ? "font-bold text-color-primary-1"
                      : ""
                  }`}
                >
                  {participant2FinalResult}
                </span>
              </div>
              <span className="text-xs font-semibold uppercase">
                {nObject.status_type === "notstarted"
                  ? "Not Started"
                  : nObject.status_type}
              </span>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-y-6 sm:flex-row">
              <div className="text-center">
                <div className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 p-8">
                  <IoShield className="h-12 w-12 text-red-500" />
                </div>
                <div className="mt-4 text-color-support-4 dark:text-white">
                  <h1
                    className={`cursor-pointer hover:underline ${
                      participant2FinalResult > participant1FinalResult
                        ? "text-color-primary-1"
                        : ""
                    }`}
                  >
                    {participantName2}
                  </h1>
                  <h2 className="pb-1 pt-2 text-xs uppercase">
                    {nObject.gender}
                  </h2>
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
      </div>
    </div>
  );
}
