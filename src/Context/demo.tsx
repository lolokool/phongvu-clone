import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { dataApi } from "../pages/home";
import "react-alert-confirm/lib/style.css";
import AlertConfirm from "react-alert-confirm";

import { getChonquaAPIInfo } from "../api/get-products.api";

type Props = {
  children: ReactNode;
};
[];

type CartItem = dataApi & { count: number };

interface ShoppingContextType {
  itemCount: number;
  detailData: dataApi[];
  cartCount: number;
  totalPrice: number;
  cartItems: CartItem[];
  increaseCount: (skuId: number) => void;
  decreaseCount: (skuId: number) => void;
  addCartItem: (item: dataApi) => void;
  removeCartItem: (item: number) => void;
  clearCart: () => void;
}
const ShoppingContext = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({ children }: Props) => {
  const [detailData, setDetailData] = useState<dataApi[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItems") ?? "")
  );
  const itemCount = cartItems.length;

  const cartCount = cartItems.reduce((count, item) => count + item.count, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.count * item.latestPrice,
    0
  );

  const increaseCount = (skuId: number) => {
    console.log("increaseCount", skuId);
    const currentCartItem = cartItems.find((item) => item.skuId === skuId);
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.skuId === skuId) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      setCartItems(newItems);
    }
  };

  const decreaseCount = (skuId: number) => {
    console.log("decreaseCount", skuId);
    const currentCartItem = cartItems.find((item) => item.skuId === skuId);
    if (currentCartItem) {
      if (currentCartItem.count === 1) {
        removeCartItem(skuId);
      } else {
        const newItems = cartItems.map((item) => {
          if (item.skuId === skuId) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(newItems));
        setCartItems(newItems);
      }
    }
  };

  const addCartItem = (product: dataApi) => {
    console.log("Product", product);
    const currentCartItem = cartItems.find(
      (item) => item.skuId === product.skuId
    );
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.skuId === product.skuId) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    } else {
      const newItem = { ...product, count: 1 };
      setCartItems([...cartItems, newItem]);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeCartItem = (skuId: number) => {
    console.log("remove", skuId);
    AlertConfirm({
      title: "Are you sure?",
      desc: "Xóa sản phẩm này",
      onOk: () => {
        const currentCartItemIndex = cartItems.findIndex(
          (item) => item.skuId === skuId
        );
        const newItems = [...cartItems];
        newItems.splice(currentCartItemIndex, 1);
        localStorage.setItem("cartItems", JSON.stringify(newItems));
        setCartItems(newItems);
      },
      onCancel: () => {
        console.log("cancel");
      },
    });
  };

  const clearCart = () => {
    AlertConfirm({
      title: "Are you sure?",
      desc: "Xóa tất cả sản phẩm trong giỏ hàng",
      onOk: () => {
        console.log("ok");
        setCartItems([]);
      },
      onCancel: () => {
        console.log("cancel");
      },
    });
  };
  useEffect(() => {
    getChonquaAPIInfo().then((data) => {
      setDetailData(data);
    });
  }, []);

  return (
    <ShoppingContext.Provider
      value={{
        detailData,
        itemCount,
        cartItems,
        cartCount,
        totalPrice,
        increaseCount,
        decreaseCount,
        addCartItem,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
export default ShoppingContext;
