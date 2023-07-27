import axios from "axios";
import { SPOTIFY_API_URL } from "./constants";
import { getAccessCode } from "./axios";

export type ArtistInfo = {
  followers: {
    total: number;
  };
  genres: string[];
  images: Image[];
  name: string;
  popularity: number;
};

export type Track = {
  id: string;
  name: string;
  album: Album;
  duration_ms: number;
  explicit: boolean;
  href: string;
  preview_url: string;
  track_number: number;
};

export type Album = {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  images: Image[];
  href: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

async function fetchAndRetry(url: string) {
  try {
    const res = await axios.get(url);
    if (!res.status) {
      throw new Error("Failed to fetch artist");
    }
    return res.data;
  } catch (error) {
    await getAccessCode();
    return fetchAndRetry(url);
  }
}

export async function getArtistInfo(id: string): Promise<ArtistInfo> {
  return fetchAndRetry(`${SPOTIFY_API_URL}/artists/${id}`);
}

export async function getTopTracks(
  artistId: string,
): Promise<{ tracks: Track[] }> {
  return fetchAndRetry(
    `${SPOTIFY_API_URL}/artists/${artistId}/top-tracks?market=co`,
  );
}
