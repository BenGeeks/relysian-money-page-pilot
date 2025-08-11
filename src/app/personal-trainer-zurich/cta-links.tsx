"use client";

import { evBookConsult, evWaitingList, evSimplyBook, evCall, evWhatsApp, gaEvent } from "@/lib/ga";
import { Kind } from "@/types/cta-links.types";

interface Props {
  className?: string;
  location: string;
  label: string;
  kind: Kind;
}

const CtaLink = ({ kind, label, location, className }: Props) => {
  const fire = () => {
    const params = { page: "personal-trainer-zurich", location, label };
    switch (kind) {
      case "book":
        return evBookConsult(params);
      case "waiting_list":
        return evWaitingList(params);
      case "call":
        return evCall(params);
      case "whatsapp":
        return evWhatsApp(params);
      case "simplybook":
        return evSimplyBook(params);
      default:
        return gaEvent("click_custom", params);
    }
  };

  return (
    <button type="button" onClick={fire} className={className}>
      {label}
    </button>
  );
};

export default CtaLink;
