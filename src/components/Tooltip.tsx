import { ReactNode } from "react";

interface TooltipProps {
  message: string;
  children: ReactNode;
}

export default function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex justify-center">
      {children}
      <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
