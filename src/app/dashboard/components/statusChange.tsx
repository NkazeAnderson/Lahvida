"use client";
import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

type Props = { text: string };

function DropDownItem({
  text,
  status,
  setStatus,
}: {
  text: string;
  status: string;
  setStatus: (value: string) => void;
}) {
  return (
    <div
      onClick={() => setStatus(text)}
      className="flex space-x-1 hover:bg-hover-gray  hover:cursor-pointer rounded-md text-primary py-2 px-6 my-2"
    >
      <p>{text}</p>
    </div>
  );
}

function StatusChange({ text }: Props) {
  const [status, setStatus] = useState(text);
  const [opened, setOpened] = useState(false);
  const changeStatus = (value: string) => {
    setStatus(value);
    setOpened(!opened);
  };
  return (
    <>
      <div
        onClick={() => {
          setOpened(!opened);
        }}
        className={`flex space-x-1 items-center w-full justify-between hover:bg-hover-gray  hover:cursor-pointer rounded-md  py-2 px-6 my-2 ${
          opened ? "bg-primary text-white" : "text-primary"
        }`}
      >
        <div className="flex items-center space-x-2">
          <FaFileAlt />
          <p>{status}</p>
        </div>

        <GoChevronDown />
      </div>

      {opened && (
        <div>
          {["Partial", "Paid", "Rejected", "Approved"].map((item) => {
            if (item === status) {
              return;
            }
            return (
              <DropDownItem
                key={item}
                text={item}
                status={status}
                setStatus={changeStatus}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default StatusChange;
