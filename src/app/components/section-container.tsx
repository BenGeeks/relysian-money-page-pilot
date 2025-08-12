import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className = "" }: Props) => <section className={`min-h-screen flex items-center justify-center ${className}`}>{children}</section>;

export default SectionContainer;
