import React from "react";
import skinCareImg from "@/assets/skincare.webp";
import hydrationImg from "@/assets/hydration.webp";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const SummerCarePage = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h2 className="text-3xl font-bold text-slate-700 my-6">
        Summer Care Tips
      </h2>

      <div className="space-y-10">
        {/* skin care start */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10  items-center ">
          <Image
            src={skinCareImg}
            width={600}
            height={400}
            alt="skinCare"
            className="rounded-xl"
          />
          <div className="space-y-3 ">
            <h2 className="text-4xl font-bold text-gray-700">Skin Care</h2>
            <p className="font-medium text-gray-600">
              In hot weather, heavy creams can feel greasy. Switch to
              lightweight moisturizers or gel-based creams like the ones shown.
              They hydrate without clogging pores.Even though it’s not visible,
              sunscreen is non-negotiable in summer. Use SPF 30+ daily,
              especially if you&apos;re going outside.
            </p>
            <div className="space-y-2">
              <p className="font-bold text-[16px] text-slate-600">
                The dropper bottle in the image suggests a serum—great for
                summer. Look for:
              </p>
              <ul className="">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span className="text-zinc-500 font-medium">
                    {" "}
                    Vitamin C (for brightness & sun protection support)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />{" "}
                  <span className=" text-zinc-500 font-medium">
                    Hyaluronic acid (for hydration)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />{" "}
                  <span className=" text-zinc-500 font-medium">
                    Helps control excess oil
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />{" "}
                  <span className=" text-zinc-500 font-medium">
                    Avoid over-washing (can strip natural oils)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* skin care end */}

        {/* hydration start  */}
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10  items-center ">
          <div className="space-y-3 ">
            <h2 className="text-4xl font-bold text-gray-700">Hydration Tips</h2>
            <p className="font-medium text-gray-600">
              Summer hydration isn’t just about drinking more water—it’s about
              maintaining your body and skin’s moisture balance in high heat and
              humidity. As temperatures rise, your body loses more fluids
              through sweat, which can quickly lead to dehydration if not
              replenished properly.
            </p>
            <p className="font-medium text-gray-600">
              Drinking enough water throughout the day is the foundation.
              Instead of waiting until you feel thirsty, make it a habit to sip
              water consistently. You can also include hydrating foods like
              watermelon, cucumber, and oranges, which are rich in water content
              and help restore electrolytes naturally.
            </p>
          </div>
          <Image
            src={hydrationImg}
            width={600}
            height={400}
            alt="skinCare"
            className="rounded-xl"
          />
        </div>
        {/* hydration end */}
      </div>
    </div>
  );
};

export default SummerCarePage;
