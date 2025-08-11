import { sendGAEvent } from "@next/third-parties/google";

type GAParams = {
  [k: string]: unknown;
  location?: string;
  label?: string;
  value?: number;
  page?: string;
};

const withDebug = (params: Record<string, unknown> = {}) => {
  try {
    if (typeof window !== "undefined" && location.hostname === "localhost") {
      return { ...params, debug_mode: true };
    }
  } catch {}
  return params;
};

export const pageview = (url: string) => {
  sendGAEvent("event", "page_view", withDebug({ page_path: url }));
};

export const gaEvent = (action: string, params: Record<string, unknown> = {}) => {
  sendGAEvent("event", action, withDebug(params));
};

export const evBookConsult = (p: GAParams = {}) => gaEvent("click_book_consult", p);

export const evWaitingList = (p: GAParams = {}) => gaEvent("click_waiting_list", p);

export const evCall = (p: GAParams = {}) => gaEvent("click_call", p);

export const evWhatsApp = (p: GAParams = {}) => gaEvent("click_whatsapp", p);

export const evSimplyBook = (p: GAParams = {}) => gaEvent("click_simplybook", p);
