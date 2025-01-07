"use client"
import "../styles/login.css";

import { LogedSection } from "./LogedSection";

export const UserSection = (): React.JSX.Element => {
  
  return (
    <>
      <aside className="m-auto text-UI-bg-main-text justify-items-center flex flex-col items-center bg-UI-bg-second border-r-4 w-52 border-UI-highligth-element h-screen p-0">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <LogedSection />
        </div>  
      </aside>
    </>
  );
};
