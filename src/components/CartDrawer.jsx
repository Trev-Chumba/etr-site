import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from '@headlessui/react';
import { useState } from 'react';
import { XIcon } from 'lucide-react';
export const CartDrawer = ({ open, onClose }) => {
  const [, setOpen] = useState(open);
  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose(); // Call the onClose function passed from parent
  };
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className="relative z-10 dark:bg-[var(--background)]"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md  transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col dark:bg-gray-800 bg-background-light  overflow-y-scroll py-6 shadow-xl">
                <div className="px-4 sm:px-6 pb-10 bg-black fixed top-0 left-0 w-full z-50">
                  <DialogTitle className="text-base pt-8 font-semibold bg-background-dark text-text-dark">
                    Panel title
                  </DialogTitle>
                </div>
                <div className="relative mt-6 mb-0 flex-auto px-4 sm:px-6">
                  {/* Your content */}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
