import {
  Dialog,
  DialogTitle,
  Transition,
  TransitionChild,
  DialogPanel,
} from '@headlessui/react';
import { useState, Fragment } from 'react';

export function ItemDialog({ heading, description, images, price, opened }) {
  const [open, setOpen] = useState(opened);
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
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
            <DialogPanel className="w-full max-w-lg rounded-lg bg-white p-6 dark:bg-gray-900 shadow-xl">
              {/* Title */}
              <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                {heading}
              </DialogTitle>

              {/* Description */}
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {description}
              </p>

              {/* Images */}
              <div className="mt-4 flex gap-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.path}
                    alt={`Preview ${index + 1}`}
                    className="w-16 h-16 rounded-lg shadow-md"
                  />
                ))}
              </div>

              {/* Price */}
              <p className="mt-4 font-semibold text-gray-900 dark:text-white">
                Price: {price} Kes.
              </p>

              {/* Close Button */}
              <button
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
