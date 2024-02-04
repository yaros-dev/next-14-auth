"use client";

import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  lable: string;
}

const BackButton = ({ href, lable }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{lable}</Link>
    </Button>
  );
};

export default BackButton;
