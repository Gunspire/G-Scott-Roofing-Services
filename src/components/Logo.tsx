 "use client";

import React from "react";

import { cn } from "../lib/cn";
import { COMPANY } from "../lib/company";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, alt = COMPANY.name, variant = "default" }: LogoProps) {
  const [src, setSrc] = React.useState("/Untitled%20(1).jpg");

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-12 w-auto",
        variant === "inverse" ? "brightness-0 invert" : undefined,
        className
      )}
      loading="eager"
      decoding="async"
      onError={() => setSrc("/eliteguard-roofing-logo.svg")}
    />
  );
}


