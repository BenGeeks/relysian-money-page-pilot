import React from "react";
import HeroImage from "./hero-image";

interface Props {
  imgUrl: string;
  children: React.ReactNode;
}

const PageContainer = ({ imgUrl, children }: Props) => {
  return (
    <>
      <HeroImage imgUrl={imgUrl} />
      <main className="relative z-10 font-sans min-h-screen overflow-hidden">{children}</main>{" "}
    </>
  );
};

export default PageContainer;
