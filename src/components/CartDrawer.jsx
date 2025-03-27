import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from '@headlessui/react';
import { useState, useEffect } from 'react';
import { XIcon } from 'lucide-react';
import PosData from './../assets/pos/items.json';
import { CheckoutItem } from './CheckouItem';
import { useCart } from '../general/Contexts/CartContext';
import NumberFlow from '@number-flow/react';
import { OpenPDF } from './PDF/OpenPDF';

export const CartDrawer = ({ open, onClose }) => {
  const [, setOpen] = useState(open);
  const [isOpen, setIsOpen] = useState(false);
  //const [savedItems, setSavedItems] = useState([]);
  const { cartItems, removeItem, clearItems } = useCart();
  const [updatedItems, setUpdatedItems] = useState([]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose(); // Call the onClose function passed from parent
  };

  useEffect(() => {
    const getSavedItems = () => {
      return PosData.filter((item) => cartItems.includes(item.id));
    };
    const filteredItems = getSavedItems();

    // Set initial quantity for each item
    setUpdatedItems(filteredItems.map((item) => ({ ...item, quantity: 1 })));
  }, [cartItems]); // Only depend on `cartItems`, not `removeItem`

  const updateQuantity = (id, newQuantity) => {
    setUpdatedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    // console.log(updatedItems, totalPrice, 'pray');
  };

  const totalPrice = updatedItems.reduce(
    (acc, item) => acc + item.value * item.quantity,
    0
  );
  const removeFromCart = (id) => {
    removeItem(id); // Updates `cartItems`
  };

  const renderPdf = () => {
    handleClose();
    setIsOpen(true);
  };
  return (
    <div>
      <OpenPDF cartItems={updatedItems} setIsOpen={setIsOpen} isOpen={isOpen} />
      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-40 dark:bg-[var(--background)]"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 dark:bg-gray-800/25 bg-gray-200/90 backdrop-blur-lg transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-auto fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md  transform transition duration-500 
              ease-in-out data-closed:translate-x-full sm:duration-700 z-50"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="relative rounded-md dark:text-gray-300 text-white hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col dark:bg-gray-800 bg-background-light  overflow-y-scroll py-6 shadow-xl">
                  <div className="px-4 sm:px-6 pb-10 bg-black fixed top-0 left-0 w-full z-50">
                    <DialogTitle className="text-base pt-8 h-14 font-semibold bg-background-dark text-text-dark">
                      My cart
                    </DialogTitle>
                  </div>
                  <div className="relative mt-9 mb-0 flex flex-auto px-4 sm:px-6 flex-col justify-between w-full h-full">
                    <div className="mt-1 flex  border-t-4 border-t-slate-100 overflow-y-scroll">
                      <div className="pt-8 w-full justify-start">
                        {updatedItems.map((item) => (
                          <CheckoutItem
                            key={item.id}
                            heading={item.heading}
                            thumbnail={item.thumbnailSrc}
                            remove={() => removeFromCart(item.id)} // Ensure remove is a function
                            price={item.value}
                            updateQuantity={(newQuantity) =>
                              updateQuantity(item.id, newQuantity)
                            }
                            quantity={item.quantity}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col relative">
                      <div
                        className="text-gray-500 flex flex-row justify-between bg-white
                     dark:bg-gray-800 text-lg font-semibold mb-5 mt-2 border-t-2 border-gray-600"
                      >
                        <div className="">
                          <span>Total:</span>
                        </div>
                        <NumberFlow
                          value={totalPrice}
                          format={{
                            style: 'currency',
                            currency: 'KES',
                            trailingZeroDisplay: 'stripIfInteger',
                          }}
                        />
                      </div>
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 
                     font-semibold hover:text-white py-2 px-4 border border-blue-500
                     hover:border-transparent rounded mb-3"
                        onClick={clearItems}
                      >
                        Clear Cart
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white
                     font-bold py-2 px-4 rounded"
                        disabled={updatedItems.length < 1}
                        onClick={() => {
                          renderPdf();
                        }}
                      >
                        Quotation
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
