export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string;

type GAParams = {
  page?: string;
  location?: string;
  label?: string;
  value?: number;
  [k: string]: unknown;
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
  if (!GA_ID) return;
  window.gtag?.("config", GA_ID, { page_path: url, debug_mode: true });
};

export const gaEvent = (action: string, params: Record<string, unknown> = {}) => {
  window.gtag?.("event", action, withDebug(params));
};

export const evBookConsult = (p: GAParams = {}) => gaEvent("click_book_consult", p);

export const evWaitingList = (p: GAParams = {}) => gaEvent("click_waiting_list", p);

export const evCall = (p: GAParams = {}) => gaEvent("click_call", p);

export const evWhatsApp = (p: GAParams = {}) => gaEvent("click_whatsapp", p);

export const evSimplyBook = (p: GAParams = {}) => gaEvent("click_simplybook", p);
