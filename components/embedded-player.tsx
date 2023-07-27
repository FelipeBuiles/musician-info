type EmbeddedPlayerProps = {
  trackId: string;
};
const EmbeddedPlayer = ({ trackId }: EmbeddedPlayerProps) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
      width="70%"
      height="100"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded"
    ></iframe>
  );
};

export default EmbeddedPlayer;
