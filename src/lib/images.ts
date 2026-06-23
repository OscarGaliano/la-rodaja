/** URLs Unsplash optimizadas para next/image (alta resolución) */
export function unsplash(
  photoId: string,
  width: number,
  height: number,
  quality = 90,
) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
}

export const IMAGE_QUALITY = 90;
