import EmbeddedPlayer from "@/components/embedded-player";
import { getTopTracks } from "@/lib/api";
import { TOOL_ID } from "@/lib/constants";

export default async function TopTracks() {
  const { tracks } = await getTopTracks(TOOL_ID);

  return (
    <ul className="flex flex-col items-center py-10">
      {tracks.map((track) => (
        <EmbeddedPlayer trackId={track.id} key={track.name} />
      ))}
    </ul>
  );
}
