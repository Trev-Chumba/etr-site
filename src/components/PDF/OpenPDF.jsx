import { PDFViewer } from '@react-pdf/renderer';
import { Quotation } from './Quotation';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';

export function OpenPDF({ cartItems, isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
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
          <DialogPanel className="w-full max-w-7xl max-h-full bg-white rounded-lg shadow-lg p-3">
            <DialogTitle className="text-lg font-semibold text-gray-800">
              Receipt Viewer
            </DialogTitle>
            <div className="mt-3 h-[700px] border">
              <PDFViewer width="100%" height="100%">
                <Quotation items={cartItems} />
              </PDFViewer>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}
