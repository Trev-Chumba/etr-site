export function PosCard({
  heading,

  description,

  thumbnailSrc,

  thumbnailAlt = 'Thumbnail',

  className,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>

      <h3 className="pt-5 text-[14px] font-bold text-gray-600 block">
        {heading}
      </h3>

      <p className="font-semibold text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p>
    </div>
  );
}
