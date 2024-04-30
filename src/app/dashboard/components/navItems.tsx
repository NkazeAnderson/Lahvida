"use client";
import { sideBarItems } from "@/constants";
import React from "react";
import SideBarItem from "./sideBarItem";
import { FaGear } from "react-icons/fa6";

type Props = { is_Setting: boolean };

function NavItems({ is_Setting }: Props) {
  return (
    <>
      {!is_Setting ? (
        sideBarItems.map((sideBarItem) => (
          <SideBarItem
            key={sideBarItem.text}
            Icon={sideBarItem.Icon}
            text={sideBarItem.text}
            clickable={sideBarItem.clickable}
            dropDowns={sideBarItem.dropDowns}
          />
        ))
      ) : (
        <SideBarItem text="Settings" Icon={FaGear} clickable={false} />
      )}
    </>
  );
}

export default NavItems;
