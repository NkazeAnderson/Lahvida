import { IconType } from "react-icons";
import { FaFileAlt } from "react-icons/fa";
import { FaArrowRightLong, FaCirclePlus, FaGear } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";

group: HiMiniUserGroup;
file: FaFileAlt;
gift: FiGift;
diamond: IoDiamondOutline;
report: TbReportAnalytics;
gear: FaGear;
arrow: FaArrowRightLong;
plus: FaCirclePlus;

export type SideBarItemT = {
  text: string;
  Icon: IconType;
  clickable: boolean;
  dropDowns?: string[];
};

export type TableItemT = {
  invoice_no: string;
  client: string;
  user: string;
  date: string;
  status: "Partial" | "Paid" | "Rejected" | "Approved";
  amount: number;
};

export const sideBarItems: SideBarItemT[] = [
  { text: "Client", Icon: HiMiniUserGroup, clickable: false },
  {
    text: "Invoices",
    Icon: FaFileAlt,
    clickable: true,
    dropDowns: ["New", "List", "Overdue", "Partial paid"],
  },
  {
    text: "Quotation",
    Icon: FaFileAlt,
    clickable: true,
    dropDowns: ["New", "List", "Hot Leads", "Expired"],
  },
  { text: "Items", Icon: FiGift, clickable: false },
  { text: "Company", Icon: IoDiamondOutline, clickable: false },
  { text: "Reports", Icon: TbReportAnalytics, clickable: false },
];

export const tableItems: TableItemT[] = [
  {
    invoice_no: "INV001",
    client: "Sea Rocket Tech",
    user: "Anderson",
    date: "04/04/2024",
    status: "Partial",
    amount: 41000,
  },
  {
    invoice_no: "INV002",
    client: "Coded Design",
    user: "Matthew",
    date: "04/04/2024",
    status: "Partial",
    amount: 41000,
  },
];
