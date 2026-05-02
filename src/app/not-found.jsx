import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center   px-6">
      <h1 className="text-7xl font-extrabold tracking-widest text-purple-500 drop-shadow-lg">
        404
      </h1>

      <p className="mt-6 text-xl  text-slate-700">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <p className="mt-2 text-gray-500">It might have been moved or deleted.</p>

      <div className="mt-8">
        <Link href="/">
          <Button
            variant="tertiary"
            className=" bg-purple-600 text-white font-bold"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
