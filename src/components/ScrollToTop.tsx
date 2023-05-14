import { useState, useEffect } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-3 right-3">
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "pointer-events-none opacity-0"
        } inline-flex items-center rounded-lg bg-color-primary-1 p-2 text-white shadow-sm transition-opacity hover:bg-color-primary-2`}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
