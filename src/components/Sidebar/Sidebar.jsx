import { useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { BsFillBucketFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import SidebarContext from "../../Context/SidebarConext/SidebarContext";
import { Link, useNavigate } from "react-router-dom";
import { SiLeaderprice } from "react-icons/si";
import useAuth from "../../Hook/useAuth";
const Sidebar = () => {
  const [isOrder, setisOrder] = useState(false);
  const { OpenSide } = useContext(SidebarContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.user?.role === "admin";

  console.log(isAdmin);

  const handleLogout = () => {
    logout();
    navigate("/signIn");
  };

  return (
    <div
      className={`overflow-y-scroll pb-28 duration-300 fixed z-30 top-20 py-10 px-1 h-screen dark:bg-slate-700 bg-zinc-100 shadow-lg w-1/2 md:w-1/5 ${
        OpenSide ? "-left-0 md:-left-96" : "-left-96 md:-left-0"
      }`}
    >
      <div>
        <ul className="space-y-1 text-white">
          {isAdmin ? (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-blue-200 rounded-full">
                    <MdDashboard className="text-xl text-blue-600" />
                  </div>
                  <div>Admin Dashboard</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/AllUsers"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-teal-200 rounded-full">
                    <SiLeaderprice className="text-xl text-teal-600" />
                  </div>
                  <div>All Users</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/recharge"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-red-200 rounded-full">
                    <RiMoneyDollarCircleFill className="text-xl text-teal-600" />
                  </div>
                  <div>Recharge</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/serverCopy"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-green-500 rounded-full">
                    <FaServer className="text-xl text-red-600" />
                  </div>
                  <div>Server Copy</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/idPdf"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-yellow-600 rounded-full">
                    <FaServer className="text-xl text-emerald-400" />
                  </div>
                  <div>Admin Id Pdf</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/Admin/AddressToNid"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-red-600 rounded-full">
                    <RiMoneyDollarCircleFill className="text-xl text-lime-500" />
                  </div>
                  <div> Admin Address To Nid</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/signCopy"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-teal-500 rounded-full">
                    <FaServer className="text-xl text-slate-200" />
                  </div>
                  <div>Sign Copy</div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin/NidUserPasswordSet"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-red-600 rounded-full">
                    <FaServer className="text-xl bg-yellow-400" />
                  </div>
                  <div>Nid User Password Set</div>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/priceList"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-teal-200 rounded-full">
                    <RiMoneyDollarCircleFill className="text-xl text-teal-600" />
                  </div>
                  <div>Price List</div>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-teal-200 rounded-full">
                    <MdDashboard className="text-xl text-teal-600" />
                  </div>
                  <div>Dashboard</div>
                </Link>
              </li>
              <li
                onClick={() => setisOrder(!isOrder)}
                className="flex items-center justify-between space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-200 rounded-full">
                    <BsFillBucketFill className="text-xl text-green-600" />
                  </div>
                  <div>Order</div>
                </div>
                <div>
                  <IoIosArrowDown
                    className={isOrder ? "transform rotate-180" : ""}
                  />
                </div>
              </li>
              {isOrder && (
                <ul className="space-y-2 py-1">
                  <li>
                    <Link
                      to="/order/pending"
                      className="pl-10 md:pl-16 cursor-pointer dark:hover:text-white hover:text-black"
                    >
                      Pending
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/order/success"
                      className="pl-10 md:pl-16 cursor-pointer dark:hover:text-white hover:text-black"
                    >
                      Success
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/order/cancel"
                      className="pl-10 md:pl-16 cursor-pointer dark:hover:text-white hover:text-black"
                    >
                      Cancel
                    </Link>
                  </li>
                </ul>
              )}
              <Link
                to={"/reacharge"}
                className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="p-2 bg-yellow-200 rounded-full">
                  <RiMoneyDollarCircleFill className="text-xl text-yellow-600" />
                </div>
                <div>Recharge</div>
              </Link>
              <Link
                to={"/PriceList"}
                className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="p-2 bg-lime-200 rounded-full">
                  <RiMoneyDollarCircleFill className="text-xl text-lime-600" />
                </div>
                <div>Price List</div>
              </Link>
              <Link
                to={"/servercopy"}
                className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="p-2 bg-red-200 rounded-full">
                  <FaServer className="text-xl text-red-600" />
                </div>
                <div>Server Copy</div>
              </Link>
              <Link
                to={"/signcopy"}
                className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="p-2 bg-slate-200 rounded-full">
                  <FaServer className="text-xl text-slate-600" />
                </div>
                <div>Sign Copy</div>
              </Link>
              <Link
                to={"/idpdf"}
                className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="p-2 bg-blue-200 rounded-full">
                  <FaServer className="text-xl text-blue-600" />
                </div>
                <div>ID Pdf</div>
              </Link>
              <Link
                to="/NidUserPassSet"
                className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
              >
                <div className="p-2 bg-purple-200 rounded-full">
                  <FaServer className="text-xl text-purple-600" />
                </div>
                <div>Nid User Password Set</div>
              </Link>
              <li>
                <Link
                  to={"/AddressToNid"}
                  className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
                >
                  <div className="p-2 bg-lime-200 rounded-full">
                    <RiMoneyDollarCircleFill className="text-xl text-lime-600" />
                  </div>
                  <div>Address To Nid</div>
                </Link>
              </li>
            </>
          )}

          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-pink-200 rounded-full">
              <IoMdKey className="text-xl text-pink-600" />
            </div>
            <div>Change Password</div>
          </li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1"
          >
            <div className="p-2 bg-orange-200 rounded-full">
              <MdLogout className="text-xl text-orange-600" />
            </div>
            <div>Logout</div>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
