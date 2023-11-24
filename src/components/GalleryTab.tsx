import { Tab } from "@headlessui/react";

interface GalleryTabProps {
  image: string;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <img
              src={image}
              className="object-cover aspect-square object-center"
            />
          </span>
          <span
            className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ${
              selected ? "ring-black" : "ring-transparent"
            }`}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
