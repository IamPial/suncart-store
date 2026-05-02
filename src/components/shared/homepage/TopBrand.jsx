import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TopBrandPage = () => {
  const brands = [
    {
      id: 1,
      name: "Havaianas",
      country: "Brazil",
      established: 1962,
      specialty: "Beach Flip Flops & Sandals",
      logo: "https://i.ibb.co.com/wkY71dH/havaianas.webp",
    },
    {
      id: 2,
      name: "Speedo",
      country: "Australia",
      established: 1914,
      specialty: "Swimwear & Beach Accessories",
      logo: "https://i.ibb.co.com/xWc17GZ/speedo.avif",
    },
    {
      id: 3,
      name: "Columbia",
      country: "USA",
      established: 1938,
      specialty: "Outdoor & Summer Gear",
      logo: "https://i.ibb.co.com/7JB1dQKw/columbia.png",
    },
  ];

  return (
    <div className="container mx-auto mt-10 mb-5 px-2 md:px-0">
      <h2 className="text-3xl font-bold text-slate-700 my-6">Top Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        {brands.map((brand) => {
          return (
            <Card key={brand.id} className="w-full border">
              <div>
                <Image
                  alt={brand.name}
                  width={300}
                  height={200}
                  className="w-full h-70 md:h-60 lg:h-70 rounded-lg "
                  src={brand.logo}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                  <Card.Title className="pr-8 text-xl font-bold text-slate-600">
                    {brand.name}
                  </Card.Title>
                </Card.Header>
                <Card.Footer className="block">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-foreground">
                      Since {brand.established}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">
                      {brand.country}
                    </span>
                  </div>
                </Card.Footer>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TopBrandPage;
