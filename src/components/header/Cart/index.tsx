import { useState } from "react";
import { formatCurrency } from "../../../utils/format-money";
import MiniCart from "../../element/cart-item/MiniCart";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../../../Context/demo";
import IconCart from "../../Svgs/Cart";

const Cart = () => {
  const { cartCount, totalPrice, itemCount } = useShoppingContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowCart = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Link to="/cart">
        <div
          className="flex px-2 relative text-color01 hover:text-[#3B98FF]"
          onMouseLeave={() => setIsModalVisible(false)}
          onMouseEnter={handleShowCart}
        >
          <div className="icongiohang">
            <IconCart />
          </div>
          <div className="giohang pl-2">
            <div className=" text-13 font-medium opacity-100 leading-20 border-transparen ">
              Giỏ hàng cuả bạn
            </div>
            <div className=" text-13 font-medium opacity-100 leading-20 border-transparen ">
              ({itemCount}) sản phẩm
            </div>
          </div>
        </div>
      </Link>
      {isModalVisible && (
        <div
          onMouseEnter={() => setIsModalVisible(true)}
          onMouseLeave={() => setIsModalVisible(false)}
          className="max-h-[400px] w-[384px] p-4 absolute bg-white rounded-lg shadow-[rgb(0,0,0.15%)] right-[300px] top-[68px] "
        >
          {cartCount === 0 ? (
            <div className="flex justify-center items-center">
              <div className="p-8">
                <img
                  className="object-cover w-[186px] h-[186px]"
                  src="https://shopfront-cdn.tekoapis.com/static/empty_cart.png"
                />
                <p>Giỏ hàng chưa có sản phẩm nào</p>
                <button className="border bg-blue p-4 w-full mt-2 rounded">
                  Mua sắm ngay
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="h-[260px]  overflow-y-scroll">
                <MiniCart />
              </div>
              <div className="py-2 border-t border-[rgb(224,224,224)] border-dashed">
                <div className="flex justify-between ">
                  <div className="text-14">
                    Tổng tiền ({itemCount}) sản phẩm
                  </div>
                  <div className="text-18 font-bold">
                    {formatCurrency(Number(`${totalPrice}`))}
                  </div>
                </div>
                <div>
                  <Link to="/cart">
                    <button className="bg-[#3B98FF] w-full px-4 rounded">
                      Xem giỏ hàng
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
