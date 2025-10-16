import { useCart } from "@/store/cart";

export const Summary = () => {
  const totalItems = useCart((s) => s.totalItems); 
  const totalPrice = useCart((s) => s.totalPrice);

  return (
    <div className="p-4 border-t border-gray-700 mt-4">
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
    </div>
  );
};
