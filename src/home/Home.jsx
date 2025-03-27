import { PosCard } from '../components/PosCard';
import PosData from './../assets/pos/items.json';
import { Helmet } from 'react-helmet-async';
import { Contact } from './Contact';
import { useState } from 'react';

const structuredData = {
  '@context': 'https://schema.org/',
  '@type': 'ItemList',
  itemListElement: PosData.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `/products/${product.id}`,
    item: {
      '@type': 'Product',
      name: product.heading,
      description: product.description,
      image: product.thumbnailSrc,
      brand: {
        '@type': 'Brand',
        name: 'ETR Print Store',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KES',
        price: product.value.toString(),
        availability: 'https://schema.org/InStock',
        url: `/products/${product.id}`,
      },
    },
  })),
};

export const Home = () => {
  const [see, setSee] = useState(false);
  return (
    <div className="mt-10 flex w-full lg:flex-row flex-col pl-5 pr-5">
      <div className="lg:w-4/6 w-auto h-screen overflow-y-auto z-20 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8  ">
          <Helmet>
            <title>ETR Print Store</title>
            <meta
              name="description"
              content="Discover Demo products for my page."
            />

            {/* Open Graph Meta Tags (For Social Media) */}
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Check these ETR Demo products | ETR Print Store"
            />
            <meta
              property="og:description"
              content="Discover ETR Demo products for my page."
            />
            <meta property="og:locale" content="en_KE" />
            <meta property="og:locale:alternate" content="sw_KE" />
            <meta httpEquiv="content-language" content="en-KE" />
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>
          {PosData.map((card) => (
            <PosCard
              key={card.id}
              className={`bg-[${card.bgColor}] dark:bg-[var(--overlay-color)]`}
              heading={card.heading}
              description={card.description}
              thumbnailSrc={card.thumbnailSrc}
              price={card.value}
              imageList={card.imageList}
              id={card.id}
            />
          ))}
        </div>
      </div>
      <div className="mt-14 w-1/3 flex lg:items-end items-start flex-col justify-between h-1/2 gap-16">
        <button
          className="bg-transparent text-black border border-black
      hover:bg-black hover:text-white hover:border-white
       dark:bg-transparent dark:text-white dark:border-white
      dark:hover:bg-black dark:hover:text-white dark:hover:border-white
      font-semibold py-2 px-4 w-80 h-14 border-solid"
          onClick={() => setSee(!see)}
        >
          Contacts
        </button>
        <div className="w-11/12">{see && <Contact />}</div>
      </div>
    </div>
  );
};
