import {
  Dialog,
  DialogTitle,
  Transition,
  TransitionChild,
  DialogPanel,
} from '@headlessui/react';
import NumberFlow from '@number-flow/react';
import { Fragment, useState } from 'react';
import { SpringLightbox } from './SpringLightBox';

export function ItemDialog({
  heading,
  description,
  images,
  price,
  opened,
  setOpen,
}) {
  const [isLbOpen, setLbopen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightBox = (index) => {
    setCurrentIndex(index);
    setLbopen(true);
    // console.log('clicked image', index);
  };
  const handleCloseLB = () => {
    setLbopen(false);
  };
  return (
    <div>
      <Transition appear show={opened} as={Fragment}>
        <Dialog
          as="div"
          className="flex relative z-50 w-full max-w-4xl h-auto max-h-[90vh]"
          onClose={() => setOpen(false)}
        >
          {/* Background Overlay */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </TransitionChild>

          {/* Dialog Panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className="relative w-10/12 max-w-3xl max-h-[90vh]
             overflow-y-auto rounded-lg bg-[var(--background)] p-6 shadow-lg"
              >
                {/* Title */}
                <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                  {heading}
                </DialogTitle>

                {/* Description */}
                <div className="flex flex-row justify-between">
                  <p className="mt-2 text-gray-600 font-normal text-xl dark:text-gray-300 w-1/3">
                    {description}
                  </p>

                  {/* Images */}
                  <div className="mt-4 ml-8 gap-4 grid grid-cols-2 left-0">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img.src}
                        alt={`Preview ${index + 1}`}
                        className="w-40 h-40 rounded-lg shadow-md"
                        onClick={() => openLightBox(index)}
                      />
                    ))}
                  </div>
                </div>
                {/* Price */}
                <p className="mt-4 font-semibold text-gray-900 dark:text-white">
                  <NumberFlow
                    value={price}
                    format={{
                      style: 'currency',
                      currency: 'KES',
                      trailingZeroDisplay: 'stripIfInteger',
                    }}
                  />
                </p>

                {/* Close Button */}
                <button
                  className="bg-transparent text-black border border-black
                hover:bg-red-600 hover:text-white hover:border-white
                dark:bg-transparent dark:text-white dark:border-white
                dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600
                font-semibold py-2 px-4  h-14 border-solid transition rounded-lg w-full"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
      <SpringLightbox
        open={isLbOpen}
        setClose={handleCloseLB}
        images={images}
        currentIndex={currentIndex}
      />
    </div>
  );
}
