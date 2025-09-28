import Link from "next/link";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen  px-26">
      {/* Sidebar */}
      <aside className="w-96 bg-white shadow-md pt-10 p-2">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-[#161616] mb-1">
            Mr. Lorem Ipsum
          </h1>
          <p className=" text-[#161616]">Joined Since 2025</p>
        </div>

        <div className="p-4 space-y-2">
          {/* Account Information - Active */}
          <Link href="/dashboard/account">
            <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors bg-blue-50 border-l-4 border-blue-500">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                <RiProfileLine className="text-blue-600 text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-medium text-blue-700">
                  Account Information
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Manage your profile, bookings and more
                </p>
              </div>
            </div>
          </Link>

          {/* Your Bookings */}
          <Link href='/dashboard/bookings'><div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
              <FaCalendarAlt className="text-gray-600 text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-medium text-gray-900">
                Your Bookings
              </h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Check your latest/cancelled/pending booking
              </p>
            </div>
          </div>
         </Link>
          

          {/* Co-Travelers */}
          <Link href='/dashboard/travelers'>
          <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
              <FaUsers className="text-gray-600 text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-medium text-gray-900">
                Co-Travelers
              </h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Add or delete the respective traveler details
              </p>
            </div>
          </div>
         </Link>
          

          {/* Promo Codes/Coupons */}
          <Link href='/dashboard/promocodes'>
          <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
              <FaTicketAlt className="text-gray-600 text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-medium text-gray-900">
                Promo Codes/ Coupons
              </h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Check savings on your booking
              </p>
            </div>
          </div>
         </Link>
         

          {/* Settings */}
          <Link href='/dashboard/settings'>
          <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
              <FaCog className="text-gray-600 text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-medium text-gray-900">Settings</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Manage Notification, Fare Alert and more
              </p>
            </div>
          </div>
         </Link>
          

          {/* Log Out */}
          <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
              <FaSignOutAlt className="text-gray-600 text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-medium text-gray-900">Log Out</h3>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default layout;
