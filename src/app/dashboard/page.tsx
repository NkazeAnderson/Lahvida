import React from "react";
import { FaArrowRightLong, FaCirclePlus } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import StatusChange from "./components/statusChange";
import { tableItems } from "@/constants";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="p-4 w-full h-full relative">
      <h2 className="text-primary capitalize">INVOICES</h2>
      <div className="flex space-x-20 px-10 py-3 bg-secondary items-center rounded-lg my-5">
        <div>
          <h2 className="text-[20px] text-white">Invoices</h2>
          <p className="smaller">14 invoices</p>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex space-x-5 text-primary bg-white p-2 rounded-md items-center">
            <label htmlFor="search">
              <GoSearch />
            </label>
            <input
              className=" outline-none"
              type="text"
              placeholder="Search"
              id="search"
              name="search"
            />
          </div>
          <div className=" text-primary bg-white p-2 rounded-md items-center">
            <input className=" outline-none" type="date" />
          </div>
        </div>
      </div>
      <table className="table-fixed text-center   text-primary w-full">
        <thead className="">
          <tr>
            <th>
              <h5>Invoice No</h5>
            </th>
            <th>
              <h5>Client</h5>
            </th>
            <th>
              <h5>User</h5>
            </th>
            <th>
              <h5>Date</h5>
            </th>
            <th>
              <h5>Status</h5>
            </th>
            <th>
              <h5>Amount</h5>
            </th>
            <th>
              <h5>Details</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item) => (
            <tr
              key={item.invoice_no}
              className="border-y-[1px] border-border-gray py-2"
            >
              <td>
                <p>{item.invoice_no}</p>
              </td>
              <td>
                <p>{item.client}</p>
              </td>
              <td>
                <p>{item.user}</p>
              </td>
              <td>
                <p>{item.date}</p>
              </td>
              <td>
                <StatusChange text={item.status} />
              </td>
              <td>
                <p className=" text-text-secondary ">R{item.amount}</p>
              </td>
              <td>
                <FaArrowRightLong className="mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center space-x-4">
          <p className=" text-primary">New Invoice</p>
          <FaCirclePlus className="text-go text-[50px]" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
