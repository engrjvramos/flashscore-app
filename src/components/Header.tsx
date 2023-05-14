import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition, Switch } from "@headlessui/react";
import Tooltip from "./Tooltip";
import { AiOutlineSearch } from "react-icons/ai";
import { SlUser } from "react-icons/sl";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineTranslate } from "react-icons/hi";
import {
  HiBars3,
  HiXMark,
  HiOutlineCog8Tooth,
  HiOutlineMoon,
} from "react-icons/hi2";
import Navbar from "./Navbar";

interface ThemeProps {
  toggleTheme: () => void;
}

export default function Header({ toggleTheme }: ThemeProps) {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <header className="bg-color-secondary-1">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <svg
              preserveAspectRatio="xMinYMid meet"
              enable-background="new 0 0 215 100"
              height="100"
              viewBox="0 0 215 100"
              width="215"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
            >
              <g clip-rule="evenodd" fill-rule="evenodd">
                <g fill="#fff">
                  <path d="m180.8 24.9h-29.3c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v39.6c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-18.6c0-1 .8-1.7 1.7-1.7h25.5c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-25.5c-1 0-1.7-.8-1.7-1.7v-8.6c0-1 .8-1.7 1.7-1.7h29c.2 0 .3-.2.3-.3v-7.9c.1-.5 0-.6-.2-.6"></path>
                  <path d="m264.4 47.3c0 1-.8 1.7-1.7 1.7h-22.4c-1 0-1.7-.8-1.7-1.7v-12.1c0-1 .8-1.7 1.7-1.7h22.4c1 0 1.7.8 1.7 1.7zm7.6-14.8-6.6-6.6c-.6-.6-1.5-1-2.4-1h-23c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v39.6c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-15.2c0-1 .8-1.7 1.7-1.7h22.4c1 0 1.7.8 1.7 1.7v15.2c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-39.6c.2-.9-.2-1.8-.8-2.4z"></path>
                  <path d="m222.4 74.8h-24.1c-.9 0-1.8-.4-2.4-1l-6.6-6.6c-.6-.6-1-1.5-1-2.4v-39.6c0-.2.2-.3.3-.3h7.9c.2 0 .3.2.3.3v39.3c0 1 .8 1.7 1.7 1.7h23.8c.2 0 .3.2.3.3v7.9c.1.3 0 .4-.2.4"></path>
                  <path d="m319.8 53.1-6.6-6.6c-.6-.6-1.5-1-2.4-1h-19.2c-1 0-1.7-.8-1.7-1.7v-8.6c0-1 .8-1.7 1.7-1.7h27.2c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-27.5c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v9.2c0 .9.4 1.8 1 2.4l6.6 6.6c.6.6 1.5 1 2.4 1h19.2c1 0 1.7.8 1.7 1.7v8.6c0 1-.8 1.7-1.7 1.7h-27.2c-.2 0-.3.2-.3.3v7.9c0 .2.2.3.3.3h27.5c.9 0 1.8-.4 2.4-1l6.6-6.6c.6-.6 1-1.5 1-2.4v-9.2c0-.8-.3-1.7-1-2.4"></path>
                  <path d="m419 53.1-6.6-6.6c-.6-.6-1.5-1-2.4-1h-19.2c-.9 0-1.7-.8-1.7-1.7v-8.6c0-1 .8-1.7 1.7-1.7h27.2c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-27.5c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v9.2c0 .9.4 1.8 1 2.4l6.6 6.6c.6.6 1.5 1 2.4 1h19.2c1 0 1.7.8 1.7 1.7v8.6c0 1-.8 1.7-1.7 1.7h-27.2c-.2 0-.3.2-.3.3v7.9c0 .2.2.3.3.3h27.5c.9 0 1.8-.4 2.4-1l6.6-6.6c.6-.6 1-1.5 1-2.4v-9.2c0-.8-.4-1.7-1-2.4"></path>
                  <path d="m436.8 35.2c0-1 .8-1.7 1.7-1.7h25.5c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-25.8c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v29.9c0 .9.4 1.8 1 2.4l6.6 6.6c.6.6 1.5 1 2.4 1h25.8c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-25.5c-1 0-1.7-.8-1.7-1.7z"></path>
                  <path d="m507.1 64.5c0 1-.8 1.7-1.7 1.7h-22.4c-1 0-1.7-.8-1.7-1.7v-29.3c0-1 .8-1.7 1.7-1.7h22.4c1 0 1.7.8 1.7 1.7zm7.6-32-6.6-6.6c-.6-.6-1.5-1-2.4-1h-23c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v29.9c0 .9.4 1.8 1 2.4l6.6 6.6c.6.6 1.5 1 2.4 1h23c.9 0 1.8-.4 2.4-1l6.6-6.6c.6-.6 1-1.5 1-2.4v-29.9c0-.9-.3-1.8-1-2.4z"></path>
                  <path d="m371.8 24.9h-7.9c-.2 0-.3.2-.3.3v18.6c0 1-.8 1.7-1.7 1.7h-22.4c-1 0-1.7-.8-1.7-1.7v-18.6c0-.2-.2-.3-.3-.3h-7.9c-.2 0-.3.2-.3.3v49.3c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-18.6c0-1 .8-1.7 1.7-1.7h22.4c1 0 1.7.8 1.7 1.7v18.6c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-49.3c0-.2-.1-.3-.3-.3"></path>
                  <path d="m558.4 43.8c0 1-.8 1.7-1.7 1.7h-22.4c-.9 0-1.7-.8-1.7-1.7v-8.6c0-.9.8-1.7 1.7-1.7h22.4c1 0 1.7.8 1.7 1.7zm8.6-8.9c0-.9-.4-1.8-1-2.4l-6.5-6.6c-.6-.6-1.5-1-2.4-1h-32.8c-.2 0-.3.2-.3.3v49.3c0 .2.2.3.3.3h7.9c.2 0 .3-.2.3-.3v-18.6c0-.9.7-1.6 1.6-1.7h11.1l11.9 20.7h9.9l-11.9-20.7h1.9c.9 0 1.8-.4 2.4-1l6.5-6.6c.6-.6 1-1.5 1-2.4v-9.3z"></path>
                  <path d="m585.7 33.5h28.9c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-29.2c-.9 0-1.8.4-2.4 1l-6.6 6.6c-.6.6-1 1.5-1 2.4v29.9c0 .9.4 1.8 1 2.4l6.6 6.6c.6.6 1.5 1 2.4 1h29.2c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-28.9c-1 0-1.7-.8-1.7-1.7v-8.6c0-1 .8-1.7 1.7-1.7h20.3c.2 0 .3-.2.3-.3v-7.9c0-.2-.2-.3-.3-.3h-20.3c-1 0-1.7-.8-1.7-1.7v-8.6c0-1.4.7-2.1 1.7-2.1"></path>
                  <path d="m21.1 55.1c-.5-2.6-.6-5.1-.3-7.6l-20.6-1.9c-.4 4.3-.2 8.6.6 13s2.1 8.6 3.9 12.5l18.7-8.7c-1-2.3-1.8-4.7-2.3-7.3"></path>
                  <path d="m27.6 68.8-15.9 13.3c4.7 5.6 10.6 10.1 17.2 13.2l8.7-18.7c-3.8-1.9-7.3-4.5-10-7.8"></path>
                  <path d="m55.1 78.9c-2.6.5-5.2.6-7.6.3l-1.8 20.6c4.3.4 8.6.2 13-.6 1.4-.3 2.9-.6 4.3-.9l-5.4-20c-.8.2-1.7.4-2.5.6"></path>
                  <path d="m44.9 21.1c3.5-.6 7.1-.6 10.4 0l8.9-19.1c-7.2-2.1-15-2.7-22.9-1.3-19.7 3.5-34.7 18.2-39.6 36.4l20 5.4c2.9-10.7 11.6-19.3 23.2-21.4"></path>
                  <path d="m68.8 72.5 13.3 15.8c3.3-2.8 6.3-6.1 8.8-9.6l-16.9-11.9c-1.5 2.1-3.2 4-5.2 5.7"></path>
                  <path d="m99.8 45.6-20.6 1.8c.2 1.7.2 3.4 0 5.1l20.6 1.8c.3-2.8.3-5.7 0-8.7"></path>
                </g>
                <path d="m73.3 0-19.2 41.3 83.1-41.3z" fill="#ff0046"></path>
              </g>
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <Tooltip message={"Search"}>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-color-secondary-3 p-2 shadow-sm transition hover:bg-color-secondary-2">
                <AiOutlineSearch className="text-xl text-white" />
              </button>
            </Tooltip>

            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-color-secondary-3 p-2 shadow-sm transition hover:bg-color-secondary-2 xs:w-24">
              <SlUser className="text-white xs:mr-2" />
              <span className="hidden text-xs font-semibold uppercase text-white xs:block">
                Login
              </span>
            </button>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-color-secondary-3 p-2 shadow-sm transition hover:bg-color-secondary-2`}
                  >
                    {open ? (
                      <HiXMark className="text-2xl text-white" />
                    ) : (
                      <HiBars3 className="text-2xl text-white" />
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-xs transform px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-6">
                          <div className="-m-3 flex cursor-pointer items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-color-support-1 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-8 sm:w-12">
                              <HiOutlineCog8Tooth className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <p className="select-none text-sm font-medium text-gray-900">
                                Settings
                              </p>
                            </div>
                            <BsChevronRight className="ml-auto h-5 w-5" />
                          </div>
                          <Switch.Group>
                            <Switch.Label
                              className="-m-3 flex cursor-pointer items-center justify-between rounded-lg p-2 transition duration-150 ease-in-out hover:bg-color-support-1 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              onClick={toggleTheme}
                            >
                              <div className="flex items-center">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-8 sm:w-12">
                                  <HiOutlineMoon className="h-6 w-6 text-black" />
                                </div>
                                <div className="ml-4">
                                  <p className="select-none text-sm font-medium text-gray-900">
                                    Dark Mode
                                  </p>
                                </div>
                              </div>
                              <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                onClick={toggleTheme}
                                className={`${
                                  enabled ? "bg-color-green" : "bg-gray-100"
                                } relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`${
                                    enabled
                                      ? "translate-x-5 bg-white"
                                      : "translate-x-[1px] bg-color-support-3"
                                  } pointer-events-none inline-block h-4 w-4 transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                              </Switch>
                            </Switch.Label>
                          </Switch.Group>
                          <div className="-m-3 flex cursor-pointer items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-color-support-1 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-8 sm:w-12">
                              <HiOutlineTranslate className="h-6 w-6 text-black" />
                            </div>
                            <div className="ml-4">
                              <p className="select-none text-sm font-medium text-gray-900">
                                English
                              </p>
                            </div>
                            <BsChevronRight className="ml-auto h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
