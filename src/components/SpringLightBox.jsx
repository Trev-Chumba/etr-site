import Lightbox from 'react-spring-lightbox';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function SpringLightbox({ open, setClose, images, currentIndex }) {
  const [currentImageIndex, setCurrentIndex] = useState(currentIndex);

  useEffect(() => {
    setCurrentIndex(currentIndex); // Sync state when lightbox opens
  }, [currentIndex]);

  const gotoPrevious = () => {
    if (currentImageIndex > 0) {
      console.log('Going to previous image:', currentImageIndex - 1);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      console.log('Already at the first image, preventing close.');
    }
  };

  const gotoNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      // console.log('close');
    }
  };
  return (
    <Lightbox
      isOpen={open}
      onClose={() => {
        console.log('Lightbox is closing...');
        setClose(false);
      }}
      images={images}
      onNext={gotoNext}
      onPrev={() => {
        gotoPrevious;
      }}
      currentIndex={currentImageIndex}
      renderHeader={() => (
        <div
          className="flex justify-between z-10 cursor-auto  bg-[var(--background)] 
        text-[var(--text-color)] pt-[10px] pr-[2px] pb-[10px] pl-[20px]"
        >
          <div className="flex flex-col justify-center pt-[8px] pr-[0px] pb-[8px] pl-[10px]">
            <div>
              <h2 className="font-bold">{images[currentImageIndex].alt}</h2>
            </div>
            <div>
              <p>
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          <button
            className="top-4 right-4 bg-transparent text-[var(--text-color)] p-2 rounded-full z-50"
            onClick={() => {
              // Prevent accidental closing when clicking outside
              setClose(false);
            }}
          >
            <X className="text-[var(--text-color)]" />
          </button>
        </div>
      )}
      renderNextButton={({ canNext }) => {
        if (!canNext) return null;
        return (
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={gotoNext}
            disabled={!canNext}
          >
            <ChevronRight />
          </button>
        );
      }}
      renderPrevButton={({ canPrev }) => {
        if (!canPrev) return null; // Prevents rendering the button if there's no previous image.

        return (
          <button
            className="absolute left-7 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-50"
            onClick={gotoPrevious}
          >
            <ChevronLeft />
          </button>
        );
      }}
    />
  );
}
