"use client";

import Script from "next/script";
import { useEffect } from "react";
import { pageview } from "@/lib/ga";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string;

export default function GoogleAnalytics() {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false, debug_mode: true });
        `}
      </Script>
    </>
  );
}
