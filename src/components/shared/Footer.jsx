import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className=" mt-15 border-t border-t-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="flex gap-5 flex-col md:flex-row md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl tracking-tight text-black  font-bold">
                Sun<span className="text-orange-400">Cart</span>
              </h2>
            </div>
            <div className="text-sm leading-relaxed text-gray-600  max-w-xs">
              <p className="font-semibold text-gray-500">
                20619 Torrent Chapel Rd
              </p>
              <p className="font-semibold text-gray-500">Suite 116 #1040</p>
              <p className="font-semibold text-gray-500">Cornelius, NC 28031</p>
              <p className="font-semibold text-gray-500">United States</p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="font-semibold text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">1-800-201-1019</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">
                  support@suncart.com
                </p>
              </div>
            </div>
          </div>
          {/* social */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-700 ">
              Social Links
            </h3>
            <ul className="flex  gap-2">
              <li>
                <span className="flex items-center justify-center border rounded-full w-10 h-10 bg-neutral-900">
                  <FaFacebookF className="text-white" />
                </span>
              </li>
              <li>
                <span className="flex items-center justify-center border rounded-full w-10 h-10 bg-neutral-900">
                  <IoLogoInstagram className="text-white" />
                </span>
              </li>
              <li>
                <span className="flex items-center justify-center border rounded-full w-10 h-10 bg-neutral-900">
                  <FaXTwitter className="text-white" />
                </span>
              </li>
              <li>
                <span className="flex items-center justify-center border rounded-full w-10 h-10 bg-neutral-900">
                  <TiSocialLinkedin className="text-white  " />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 ">
          <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>

          <ul className="flex items-center gap-6">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
