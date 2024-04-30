"use client";
import { SideBarItemT } from "@/constants";
import React, { useContext, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { ActiveTabContext } from "./navSection";

function DropDownItem({ text }: { text: string }) {
  return (
    <div className="flex space-x-1 hover:bg-hover-gray  hover:cursor-pointer rounded-md text-primary py-2 px-6 my-2">
      <p>{text}</p>
    </div>
  );
}

function SideBarItem({ text, clickable, Icon, dropDowns }: SideBarItemT) {
  const { opened, setOpened } = useContext(ActiveTabContext);
  //   const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    if (text === opened && !clickable) {
      return;
    }
    if (setOpened) {
      opened === text ? setOpened("") : setOpened(text);
    }
  };

  return (
    <div className="py-2">
      <div
        className={`flex p-2 justify-between rounded-md  items-center hover:bg-hover-gray hover:cursor-pointer ${
          opened === text ? "bg-primary text-white" : " text-primary"
        }`}
        onClick={() => {
          toggleOpened();
        }}
      >
        <div className="flex space-x-4  items-center">
          <Icon />
          <p>{text}</p>
        </div>

        {clickable && <GoChevronDown />}
      </div>
      {clickable && opened === text && (
        <div className="pl-2">
          {dropDowns &&
            dropDowns.map((dropDown) => (
              <DropDownItem key={dropDown} text={dropDown} />
            ))}
        </div>
      )}
    </div>
  );
}

export default SideBarItem;
