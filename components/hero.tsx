import localFont from "next/font/local";

import { getArtistInfo } from "@/lib/api";
import { TOOL_ID } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Nav from "./nav";

const SystemaEncephale = localFont({ src: "../fonts/SystemaEncephale.ttf" });

export default async function Hero() {
  const artistInfo = await getArtistInfo(TOOL_ID);

  return (
    <div className="flex  h-60 flex-col items-center justify-center bg-accent">
      <h1
        className={cn(
          "pt-10 text-center text-8xl font-bold text-accent-foreground",
          SystemaEncephale.className,
        )}
      >
        {artistInfo.name}
      </h1>

      <Nav />
    </div>
  );
}
