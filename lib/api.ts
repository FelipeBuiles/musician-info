import axios from "axios";
import { SPOTIFY_API_URL } from "./constants";
import { getAccessCode } from "./axios";

export type ArtistInfo = {
  followers: {
    total: number;
  };
  genres: string[];
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  popularity: number;
};

export type Track = {
  id: string;
  name: string;
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
  // try {
  //   const res = await axios.get(`${SPOTIFY_API_URL}/artists/${id}`);

  //   if (!res.status) {
  //     throw new Error("Failed to fetch artist");
  //   }
  //   return res.data;
  // } catch (error) {
  //   await getAccessCode();
  //   return getArtistInfo(id);
  // }
  return fetchAndRetry(`${SPOTIFY_API_URL}/artists/${id}`);
}
