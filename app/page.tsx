import { getArtistInfo } from "@/lib/api";
import { TOOL_ID } from "@/lib/constants";

export default async function Home() {
  const artistInfo = await getArtistInfo(TOOL_ID);

  return (
    <div className="bg-accent">
      <h1 className="text-center text-6xl font-bold text-primary-foreground">
        {artistInfo.name}
      </h1>
    </div>
  );
}
