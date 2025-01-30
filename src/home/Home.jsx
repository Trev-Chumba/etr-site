import { PosCard } from '../components/PosCard';
import PosData from './../assets/pos/items.json';

export const Home = () => (
  <div className="mt-10 flex w-full flex-row">
    <div className="mt-32 w-6/12 flex items-start flex-col justify-between h-1/2 gap-16">
      <button
        className="bg-transparent text-black border border-black
      hover:bg-black hover:text-white hover:border-white
       dark:bg-transparent dark:text-white dark:border-white
      dark:hover:bg-black dark:hover:text-red-700 dark:hover:border-white
      font-semibold py-2 px-4 w-80 h-14 border-solid"
      >
        Products
      </button>
      <button
        className="bg-transparent text-black border border-black
      hover:bg-black hover:text-white hover:border-white
       dark:bg-transparent dark:text-white dark:border-white
      dark:hover:bg-black dark:hover:text-red-700 dark:hover:border-white
      font-semibold py-2 px-4 w-80 h-14 border-solid"
      >
        About
      </button>
      <button
        className="bg-transparent text-black border border-black
      hover:bg-black hover:text-white hover:border-white
       dark:bg-transparent dark:text-white dark:border-white
      dark:hover:bg-black dark:hover:text-red-700 dark:hover:border-white
      font-semibold py-2 px-4 w-80 h-14 border-solid"
      >
        Contacts
      </button>
    </div>
    <div className="w-6/12 h-screen overflow-y-scroll  rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
        {PosData.map((card) => (
          <PosCard
            key={card.id}
            className={`bg-[${card.bgColor}]`}
            heading={card.heading}
            description={card.description}
            thumbnailSrc={card.thumbnailSrc}
          />
        ))}
      </div>
    </div>
  </div>
);
