'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [mainViewRef, mainEmbla] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [thumbViewRef, thumbEmbla] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainEmbla || !thumbEmbla) return;
      mainEmbla.scrollTo(index);
    },
    [mainEmbla, thumbEmbla]
  );

  const onSelect = useCallback(() => {
    if (!mainEmbla || !thumbEmbla) return;
    setSelectedIndex(mainEmbla.selectedScrollSnap());
    thumbEmbla.scrollTo(mainEmbla.selectedScrollSnap());
  }, [mainEmbla, thumbEmbla]);

  React.useEffect(() => {
    if (!mainEmbla) return;
    onSelect();
    mainEmbla.on('select', onSelect);
    return () => {
      mainEmbla.off('select', onSelect);
    };
  }, [mainEmbla, onSelect]);

  return (
    <div className="relative w-full space-y-2">
      <div className="overflow-hidden" ref={mainViewRef}>
        <div className="flex aspect-[4/3]">
          {images.map((image, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0"
              key={index}
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden" ref={thumbViewRef}>
        <div className="flex gap-2 cursor-pointer">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative flex-[0_0_20%] aspect-[4/3] min-w-0 transition-opacity ${selectedIndex === index ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
