import NumberFlow from '@number-flow/react';
import { ShoppingCart } from 'lucide-react';
import { ItemDialog } from './ItemDialog';
import { useState } from 'react';
export function PosCard({
  heading,

  description,

  thumbnailSrc,

  thumbnailAlt = 'Thumbnail',

  className,

  price,
  imageList,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`rounded-lg p-6 shadow-lg shadow-stone-300 dark:shadow-stone-950 ${className} flex flex-col h-full`}
        onClick={() => setOpen(true)}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-2/5 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h2
              className="pt-5 text-3xl font-bold text-gray-600 block cursor-pointer duration-300 transition 
           hover:text-gray-900 dark:hover:text-white mt-2"
            >
              {heading}
            </h2>

            <p
              className="font-normal text-gray-500 cursor-pointer text-base 
            mt-2"
            >
              {description}
            </p>
          </div>
          <div className="flex justify-between items-end mt-auto w-full">
            <button
              className="flex items-center gap-2 font-semibold rounded-full border border-primary 
               px-4 py-2 text-xs text-gray-500 cursor-pointer 
               hover:text-gray-900 dark:hover:text-white"
            >
              <ShoppingCart size={16} />
              Add item
            </button>

            <p
              className="font-semibold text-gray-500 cursor-pointer text-lg 
               duration-300 transition hover:text-gray-900 dark:hover:text-white"
            >
              <NumberFlow
                value={price}
                format={{
                  style: 'currency',
                  currency: 'KES',
                  trailingZeroDisplay: 'stripIfInteger',
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <ItemDialog
        heading={heading}
        description={description}
        price={price}
        opened={open}
        images={imageList}
      />
    </div>
  );
}
