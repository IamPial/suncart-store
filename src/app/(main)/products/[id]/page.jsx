import Image from "next/image";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@heroui/react";
import { getAllProducts } from "@/lib/fetchData";

const ProductsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const products = await getAllProducts();
  const details = products.find((prod) => prod.id == id);
  return (
    <div className="container mx-auto my-10  px-2 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <Image
          src={details.image}
          alt={"summer"}
          width={600}
          height={0}
          className="h-[60vh] rounded-xl"
        />
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">
            {details.name}
          </h2>

          <p className="  text-zinc-700 font-medium  py-2 ">Description:</p>
          <p className="text-gray-500 ">{details.description}</p>
          <div className="flex my-2">
            <span className="text-slate-700 font-bold text-sm rounded-lg bg-green-300 py-2 px-8">
              {details.category}
            </span>
          </div>
          <div className="flex items-center gap-5 mt-5 justify-between">
            <span className="flex items-center gap-1 text-xl font-semibold text-slate-700">
              <IoStar className="text-orange-400" />
              {details.rating}
            </span>
            <span className=" text-2xl font-semibold text-slate-800">
              ${details.price}
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between  my-4">
              <span className=" text-md font-semibold text-slate-700">
                Available Stokes - {details.stock}
              </span>
              <span className=" text-md font-semibold text-slate-700">
                Brand - {details.brand}
              </span>
            </div>
          </div>
          <Button>Buy Now</Button>
        </div>
      </div>
      <div className="my-20 text-center ">
        <Link href="/products">
          <Button
            variant={"tertiary"}
            className="px-10 bg-violet-600 text-white"
          >
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
