import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CardPage = ({ product }) => {
  return (
    <Card className="w-full shadow-md">
      <div>
        <Image
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-70 md:h-60 lg:h-70 rounded-lg "
          src={product.image}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-lg font-semibold">
            {product.name}
          </Card.Title>
        </Card.Header>
        <Card.Footer className="block">
          <div className="flex justify-between items-center">
            <span className="text-[16px] flex items-center gap-2 font-medium text-foreground">
              <FaStar className="text-orange-300" /> {product.rating}
            </span>
            <span className="text-[16px] font-semibold text-gray-500">
              ${product.price}
            </span>
          </div>
        </Card.Footer>
        <Link href={`/products/${product.id}`}>
          <Button className="w-full ">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};
export default CardPage;
