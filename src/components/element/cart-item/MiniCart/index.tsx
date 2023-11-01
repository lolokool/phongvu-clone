import { useContext } from "react";
import { formatCurrency } from "../../../../utils/format-money";
import ShoppingContext from "../../../../Context/demo";

// }

const MiniCart = () => {
  const { cartItems } = useContext(ShoppingContext);

  return (
    <div>
      {cartItems.map((mini) => (
        <div className="mb-4">
          <div className="flex">
            <div className="w-[80px] h-[80px] border-[rgb(224,224,224)] border rounded">
              <img src={mini.image} />
            </div>

            <div className="flex-1 ml-4">
              <p className="text-13">{mini.name}</p>
              <p className="text-12">Số lượng :{mini.count}</p>
              <p className="text-14 font-bold">
                {formatCurrency(Number(mini.latestPrice))}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            {mini.voucher &&
              mini.voucher.map((a: any) => (
                <div className="ml-12 text-12">
                  <div className="flex justify-center items-center my-2">
                    <div className="w-4 h-4">
                      <img src={a.imageUrl} />
                    </div>
                    <div className="flex-1 ml-2">{a.name}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniCart;
