import React from "react";
import skinCareImg from "@/assets/skincare.webp";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const SummerCarePage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-slate-700 my-6">
        Summer Care Tips
      </h2>
      <div className="flex gap-10 items-center">
        <Image
          src={skinCareImg}
          width={600}
          height={400}
          alt="skinCare"
          className="rounded-xl"
        />
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-gray-700">Skin Care</h2>
          <p className="font-medium text-gray-600">
            In hot weather, heavy creams can feel greasy. Switch to lightweight
            moisturizers or gel-based creams like the ones shown. They hydrate
            without clogging pores.Even though it’s not visible, sunscreen is
            non-negotiable in summer. Use SPF 30+ daily, especially if
            you&apos;re going outside. Heat can damage skincare products. Keep
            them in a cool, dry place—some (like serums) can even go in the
            fridge for a refreshing effect.
          </p>
          <div className="space-y-2">
            <p className="font-bold text-[16px] text-slate-600">
              The dropper bottle in the image suggests a serum—great for summer.
              Look for:
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
    </div>
  );
};

export default SummerCarePage;
