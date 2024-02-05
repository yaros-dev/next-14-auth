"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";

const Social = () => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="w-full flex items-center justify-center ">or</div>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Social;
