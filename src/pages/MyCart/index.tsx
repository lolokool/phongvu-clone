import { useState } from "react";
import { useShoppingContext } from "../../Context/demo";
import Add from "../../components/Svgs/Add";
import Minus from "../../components/Svgs/Minus";
import RightArrow from "../../components/Svgs/RightArrow";
import Layout from "../../components/layouts";
import { formatCurrency } from "../../utils/format-money";
import { dataApi } from "../home";

const MyCart = () => {
  const {
    cartItems,
    increaseCount,
    decreaseCount,
    removeCartItem,
    clearCart,
    cartCount,
  } = useShoppingContext();
  console.log("cartItems", cartItems);

  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const [selectedItems, setSelectedItems] = useState<
    (dataApi & { count: number })[]
  >([]);

  const handleItemSelection = (event: any, selectedItem: any) => {
    const selectedItemId = selectedItem.skuId;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Thêm mục đã chọn vào danh sách
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        selectedItem,
      ]);
    } else {
      // Loại bỏ mục đã chọn khỏi danh sách
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item.skuId !== selectedItemId)
      );
    }
  };

  const handleSelectAll = () => {
    setSelectAllChecked(!selectAllChecked);
    const updatedSelectedItems = cartItems.map((item) => {
      return {
        ...item,
        count: selectAllChecked ? 0 : item.count,
      };
    });
    setSelectedItems(updatedSelectedItems);
    handleItemSelection;
  };

  //...

  return (
    <Layout>
      <div className="max-w-[1264px] my-4 mx-auto px-4 w-full">
        <p className="mb-3">Trang chủ -- Giỏ hàng</p>
        {cartCount === 0 ? (
          <div className="w-1200 mx-auto bg-white">
            <div className="flex justify-center items-center">
              <div className="p-8">
                <img
                  className="object-cover"
                  src="https://shopfront-cdn.tekoapis.com/static/empty_cart.png"
                />
                <p>Giỏ hàng chưa có sản phẩm nào</p>
                <button className="border bg-blue p-4 w-full mt-2 rounded">
                  Mua sắm ngay
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex mb-4">
              <div className="flex justify-between w-[67%] items-center">
                <p className="text-24 font-bold">Giỏ hàng</p>
                <p
                  className="text-14 text-[#7DD2EB] cursor-pointer"
                  onClick={() => clearCart()}
                >
                  Xóa tất cả
                </p>
              </div>
              <div className="flex justify-end items-center flex-1">
                <button className="border rounded text-14 border-[rgb(224,224,224)] leading-5 px-1 py-3">
                  Tải báo giá
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="bg-white w-[67%] mr-4 rounded">
                <div className="flex justify-center items-center p-4 border-b border-[rgb(224,224,224)]  text-[#333333]">
                  <input
                    type="checkbox"
                    checked={selectAllChecked}
                    onChange={handleSelectAll}
                  />
                  <div className="w-[60%] text-[15px] font-bold text-center ">
                    CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ PHONG VŨ
                  </div>
                  <div className="text-13 font-bold text-center w-[16.67%]">
                    Đơn giá
                  </div>
                  <div className="text-13 font-bold text-center w-[16.67%]">
                    Số lượng
                  </div>
                  <div className="text-13 font-bold text-center w-[16.67%]">
                    Thành tiền
                  </div>
                </div>
                {cartItems.map((e) => (
                  <div className="flex justify-center items-center p-4 flex-col">
                    {/*  */}
                    <div className="flex justify-center items-center w-full">
                      <div className=" flex w-[60%] space-x-3">
                        <input
                          type="checkbox"
                          value={e.skuId}
                          onChange={(event) => handleItemSelection(event, e)}
                        />
                        <img
                          className="w-[80px] h-[80px] border border-[rgb(224,224,224)]"
                          src={e.image}
                          alt=""
                        />
                        <div className=" ml-2">
                          <p className="text-13">{e.name}</p>
                          <p className="text-12 text-[#82869E]">
                            SKU: {e.skuId}
                          </p>
                        </div>
                      </div>

                      <div className="w-[16.67%] mr-5">
                        <div className="mb-4">
                          <div className=" text-right font-bold text-16">
                            {formatCurrency(Number(`${e.latestPrice}`))}
                          </div>
                          <div className="line-through text-right text-12">
                            {formatCurrency(Number(`${e.sellPrice}`))}
                          </div>
                        </div>
                      </div>
                      <div className="w-[16%]  flex justify-center flex-col items-center">
                        <div className="flex justify-center items-center bg-[rgb(248,248,252)] gap-2 border-[rgb(228,229,240)] border rounded">
                          <button onClick={() => decreaseCount(e.skuId)}>
                            <Minus />
                          </button>
                          <input
                            disabled
                            value={e.count}
                            type="text"
                            className="bg-[rgb(248,248,252)] border-[rgb(228,229,240)] border-x w-[40%] text-center"
                          />
                          <button onClick={() => increaseCount(e.skuId)}>
                            <Add />
                          </button>
                        </div>
                        <div
                          className="mt-2 text-13 text-[#1990FF] cursor-pointer"
                          onClick={() => removeCartItem(e.skuId)}
                        >
                          Xóa
                        </div>
                      </div>
                      <div className="w-[16.67%] text-center font-bold text-16">
                        <p className="mb-8">
                          {formatCurrency(e.count * Number(e.latestPrice))}
                        </p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="w-full ">
                      <div className="w-[3%]"></div>
                      <div className="w-[97%] bg-[rgb(243,243,247)] my-3 flex justify-between items-center py-2 rounded">
                        <div className="flex flex-col">
                          {e.voucher &&
                            e.voucher.map((a: any) => (
                              <div className="flex items-center gap-3 px-3 mb-1">
                                <div className="flex gap-2 items-center">
                                  <img src={a.imageUrl} className="w-4 h-4" />
                                  <p className="text-[#333333] text-13">
                                    {a.name}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                        <div className="pr-3">
                          <RightArrow />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" flex-1">
                <div className="bg-white p-4 text-16  rounded ">
                  <h3 className="font-bold">Khuyến mãi</h3>
                  <p className="text-12 text-[#82869E]">
                    Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua
                    thêm để áp dụng
                  </p>
                </div>
                <div className="bg-white p-4 mt-4  rounded">
                  <h3 className="mb-2 font-bold">Thanh toán</h3>
                  <div className="flex justify-between">
                    <div>Tổng tạm tính</div>
                    <div>
                      {formatCurrency(
                        selectedItems.reduce(
                          (total, item) =>
                            total + item.count * Number(item.latestPrice),
                          0
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>Thành tiền</div>
                    <div className="text-right text-[#1435C3]">
                      <div>
                        {" "}
                        {formatCurrency(
                          selectedItems.reduce(
                            (total, item) =>
                              total + item.count * Number(item.latestPrice),
                            0
                          )
                        )}
                      </div>
                      <div className="text-12 text-[#82869E]">
                        (Đã bao gồm VAT)
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue border w-[90%] h-12 m-3 rounded text-white">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default MyCart;
