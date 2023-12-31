import { Tab } from "@headlessui/react";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: { url: string }[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.url} image={image.url} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.url}>
            <div className="aspect-square relative h-full w-full rounded-lg sm:rounded-lg overflow-hidden">
              <img
                src={image.url}
                className="object-cover aspect-square object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
