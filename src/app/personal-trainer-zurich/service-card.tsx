"use client";

import { gaEvent } from "@/lib/ga";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  href: string;
}
const ServiceCard = ({ title, desc, href }: Props) => {
  return (
    <Link
      href={href}
      onClick={() =>
        gaEvent("click_service", {
          page: "personal-trainer-zurich",
          location: "services",
          label: title,
        })
      }
      className="block rounded-2xl border border-white/20 bg-white/5 p-5 hover:bg-white/10 transition"
    >
      <div className="text-xl text-white/95 font-semibold">{title}</div>
      <p className="mt-2 text-white/80">{desc}</p>
    </Link>
  );
};

export default ServiceCard;
