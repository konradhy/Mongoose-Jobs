import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiOutlineWechat } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { GiGrowth, GiPlagueDoctorProfile } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

const links = [
  { id: 1, text: "Info", path: "/", icon: <BsClipboardData /> },
  { id: 2, text: "Total jobs", path: "all-jobs", icon: <GiGrowth /> },
  { id: 3, text: "New Job", path: "add-job", icon: <GrUserWorker /> },
  { id: 4, text: "Profile", path: "profile", icon: <GiPlagueDoctorProfile /> },
  { id: 5, text: "chat", path: "chat", icon: <AiOutlineWechat /> },
  { id: 6, text: "Documents", path: "documents", icon: <FaWpforms /> },
];

export default links;
