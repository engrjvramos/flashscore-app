export default function Footer() {
  return (
    <footer className="relative bg-white text-color-support-4 dark:bg-color-combination-1 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-8">
        <div className="divide-y">
          <div className="grid grid-cols-2 py-8 md:grid-cols-7">
            <div className="col-span-3">
              <span className="text-xs font-semibold uppercase tracking-wider">
                flashscore.com
              </span>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <ul>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    Terms of Use
                  </li>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    GDPR and Journalism
                  </li>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    Advertise
                  </li>
                </ul>
                <ul>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    Contact
                  </li>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    Live Scores
                  </li>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    Recommended Sites
                  </li>
                  <li className="cursor-pointer py-2 text-xs hover:underline">
                    FAQ
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 md:col-span-4 md:mt-0">
              <span className="text-xs font-semibold uppercase tracking-wider">
                follow us
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center py-6 text-xs text-color-support-3 sm:grid-cols-5">
            <div className="col-span-1">
              <span className="cursor-pointer text-color-support-4 underline hover:no-underline dark:text-white">
                Lite version
              </span>
            </div>
            <div className="col-span-2">
              <p className="mb-1 mt-2">
                From 1.4.2023, Livesport s.r.o. became the operator of this
                service.
              </p>
              <p className="mb-2">
                Copyright &copy; 2023 Flashscore.com{" "}
                <span className="hidden sm:inline">| </span>
                <span className="hidden cursor-pointer underline hover:no-underline sm:inline">
                  Set privacy
                </span>
              </p>
              <span className="cursor-pointer underline hover:no-underline sm:hidden">
                Set privacy
              </span>
            </div>
          </div>
        </div>
        <div className="footer__block absolute bottom-0 right-0 hidden h-[150px] bg-color-secondary-1 md:block"></div>
        <div className="footer__mobileScreen absolute bottom-0 hidden h-[238px] w-[191px] items-center justify-center md:flex"></div>
      </div>
    </footer>
  );
}
