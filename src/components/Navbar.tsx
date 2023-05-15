import {
  IoFootballOutline,
  IoStar,
  IoBasketball,
  IoTennisball,
  IoBaseball,
  IoGolf,
  IoGameController,
  IoBicycle,
} from "react-icons/io5";

import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-between gap-3 text-color-support-2">
        <li className="group relative flex cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition  hover:text-white md:flex-row">
          <IoStar className="h-6 w-6" />
          Favorites
          <span className="absolute -top-2 right-2 flex h-4 w-4 items-center justify-center rounded bg-color-support-2 text-[10px] text-black transition group-hover:bg-white md:relative md:right-auto md:top-auto">
            0
          </span>
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 border-b-4 border-color-primary-1 py-5 text-xs font-semibold uppercase text-white transition hover:text-white md:flex-row">
          <IoFootballOutline className="h-6 w-6" />
          Soccer
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white md:flex-row">
          <IoBasketball className="h-6 w-6" />
          Basketball
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white md:flex-row">
          <IoGameController className="h-6 w-6" />
          Esports
        </li>
        <li className="hidden cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white xs:flex md:flex-row">
          <IoTennisball className="h-6 w-6" />
          Tennis
        </li>
        <li className="hidden cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white md:flex md:flex-row">
          <IoBaseball className="h-6 w-6" />
          Baseball
        </li>
        <li className="hidden cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white md:flex-row lg:flex">
          <IoBicycle className="h-6 w-6" />
          Cycling
        </li>
        <li className="hidden cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white md:flex-row lg:flex">
          <IoGolf className="h-6 w-6" />
          Golf
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 py-5 text-xs font-semibold uppercase transition hover:text-white md:flex-row">
          More
          <BsChevronDown className="order-first h-6 w-6 md:order-none md:w-4 lg:h-4" />
        </li>
      </ul>
    </nav>
  );
}
