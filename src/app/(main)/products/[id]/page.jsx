import Image from "next/image";
import summerImg from "@/assets/summer.webp";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@heroui/react";

// {
//   "id": 1,
//   "name": "UV Protection Sunglasses",
//   "brand": "SunShade",
//   "price": 15,
//   "rating": 4.7,
//   "stock": 10,
//   "description": "Stylish UV protection sunglasses perfect for summer outings.",
//   "image": "https://i.ibb.co.com/21LjjChd/sunglass.jpg",
//   "category": "Sunglasses"
// },

const ProductsDetailsPage = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-10 items-center">
        <Image
          src={summerImg}
          alt={"summer"}
          width={600}
          height={0}
          className="h-[60vh] rounded-xl"
        />
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Sunglass</h2>
          <p className="my-3 inline-block text-zinc-700 font-medium rounded-full py-2 px-8 bg-purple-200 ">
            Description
          </p>
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            reprehenderit sapiente qui similique, laborum quibusdam pariatur
            nemo minus eum, rem itaque deserunt maxime fugiat quo maiores modi
            harum voluptates accusamus.
          </p>
          <div className="flex items-center gap-5 mt-5 justify-between">
            <span className="flex items-center gap-1 text-2xl font-semibold text-slate-700">
              <IoStar className="text-orange-400" /> 4.8
            </span>
            <span className=" text-2xl font-semibold text-slate-800">
              $44.95
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between  my-4">
              <span className=" text-xl font-semibold text-slate-700">
                Available Stokes -15
              </span>
              <span className=" text-sm font-semibold text-rose-400">
                from Sunshade
              </span>
            </div>
            <span className="text-slate-700 font-bold text-sm rounded-lg bg-green-300 py-2 px-8">
              Category -MoymUaaz
            </span>
          </div>
        </div>
      </div>
      <div className="my-15 text-center ">
        <Link href="/products">
          <Button variant={"primary"} className="px-10">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
