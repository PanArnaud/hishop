import React from "react";

interface GalleryProps {
  images: { url: string }[];
}

const Gallery = ({images}: GalleryProps) => {
  return <div>Gallery</div>;
};

export default Gallery;
