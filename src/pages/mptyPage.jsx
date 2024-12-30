import Lottie from "lottie-react";
import emptyAnimation from "../assets/empty.json";

const EmptyPage = () => {
  return (
    <div className="grid items-center justify-center h-[calc(100vh-100px)]">
      <div className="flex flex-col font-bold text-center items-center h-max">
        <Lottie animationData={emptyAnimation} className="h-40 md:h-96" />
        <h1 className="text-2xl font-bold md:text-xl">
          Sorry the Product You are Searching is not Available Now!!!
        </h1>
      </div>
    </div>
  );
};

export default EmptyPage;
