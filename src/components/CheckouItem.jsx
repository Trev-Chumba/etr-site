import { Plus, Minus, Trash } from 'lucide-react';
import NumberFlow from '@number-flow/react';

export function CheckoutItem({
  heading,
  remove,
  thumbnail,
  price,
  quantity,
  updateQuantity,
}) {
  //const [num, setNum] = useState(1);
  const handleIncrease = () => updateQuantity(quantity + 1);
  const handleDecrease = () => updateQuantity(Math.max(quantity - 1, 1));
  const newPrice = quantity * price;
  return (
    <div className="flex flex-row justify-between h-36 w-full bg-transparent border-b-2 border-gray-800">
      <div>
        <div className="flex flex-col">
          <div className="font-bold text-[var(--text-color)]">{heading}</div>
          <img src={thumbnail} className="h-16 w-24"></img>
          <div className="flex flex-row justify-start">
            <button disabled={quantity <= 1} onClick={handleDecrease}>
              <Minus />
            </button>
            <NumberFlow
              value={quantity}
              format={{
                style: 'decimal',
                trailingZeroDisplay: 'stripIfInteger',
              }}
            />
            <button onClick={handleIncrease}>
              <Plus />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="mb-9">
          <button
            className="bg-red-500 hover:bg-red-800 text-white 
          font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={remove}
          >
            <Trash />
            <span>Clear</span>
          </button>
        </div>
        <div>
          <h2
            className="font-bold text-gray-500 cursor-pointer text-lg 
               duration-300 transition hover:text-gray-900 dark:hover:text-white"
          >
            <NumberFlow
              value={newPrice}
              format={{
                style: 'currency',
                currency: 'KES',
                trailingZeroDisplay: 'stripIfInteger',
              }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}
