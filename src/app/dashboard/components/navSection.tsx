"use client";
import Image from "next/image";
import React, { createContext, useContext, useState } from "react";
import NavItems from "./navItems";

type Props = {};
type ActiveTabT = {
  opened?: string;
  setOpened?: React.Dispatch<React.SetStateAction<string>>;
};
export const ActiveTabContext = createContext<ActiveTabT>({});
function NavSection({}: Props) {
  const [activeTab, setActiveTab] = useState<string>("");
  return (
    <>
      <ActiveTabContext.Provider
        value={{ opened: activeTab, setOpened: setActiveTab }}
      >
        <div>
          <Image
            className="mx-auto"
            src={"/logo.png"}
            alt="Logo"
            width={95}
            height={95}
          />
          <div className="p-[35px]"></div>

          <NavItems is_Setting={false} />
        </div>

        <NavItems is_Setting={true} />
      </ActiveTabContext.Provider>
    </>
  );
}

export default NavSection;
