"use client";

import { evBookConsult, evWaitingList, evSimplyBook, evCall, evWhatsApp, gaEvent } from "@/lib/ga";
import { Kind } from "@/types/cta-links.types";
import Link from "next/link";

interface Props {
  kind: Kind;
  href: string;
  label: string;
  location: string;
  className?: string;
}

const CtaLink = ({ kind, href, label, location, className }: Props) => {
  const fire = () => {
    const params = { page: "personal-trainer-zurich", location, label };
    switch (kind) {
      case "book":
        evBookConsult(params);
        break;
      case "waiting_list":
        evWaitingList(params);
        break;
      case "simplybook":
        evSimplyBook(params);
        break;
      case "call":
        evCall(params);
        break;
      case "whatsapp":
        evWhatsApp(params);
        break;
      default:
        gaEvent("click_custom", params);
    }
  };

  return (
    <Link href={href} onClick={fire} className={className}>
      {label}
    </Link>
  );
};

export default CtaLink;
