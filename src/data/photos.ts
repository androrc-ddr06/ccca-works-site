export interface Photo {
  src: string;
  alt: string;
}

// Add photos by dropping image files into `public/media/photos/` and listing
// them here, e.g. { src: "/media/photos/trades-day-01.jpg", alt: "Students at Trades Day" }.
// The gallery section auto-hides while this list is empty.
export const photos: Photo[] = [];
