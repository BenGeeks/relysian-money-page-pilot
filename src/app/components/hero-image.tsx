import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
}

const HeroImage = ({ imgUrl }: Props) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Image src={imgUrl} alt="Page Hero" fill priority sizes="100vw" quality={60} className="object-cover object-center opacity-20 pointer-events-none select-none" aria-hidden />
    </div>
  );
};

export default HeroImage;
