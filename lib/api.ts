import axiosInstance from "./axios";

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
};

export type Track = {
  id: string;
  name: string;
};

export async function getArtistInfo(id: string): Promise<ArtistInfo> {
  const res = await axiosInstance.get(`/artists/${id}`);

  if (!res.status) {
    throw new Error("Failed to fetch artist");
  }
  return res.data;
}
