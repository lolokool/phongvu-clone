import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { dataApi } from "../pages/home";
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
    const currentCartItemIndex = cartItems.findIndex(
      (item) => item.skuId === skuId
    );

    const newItems = [...cartItems];
    newItems.splice(currentCartItemIndex, 1);
    alert("Xóa sản phẩm này??");
    setCartItems(newItems);
  };

  const clearCart = () => {
    alert("Bạn chắc chắn muốn xóa");
    setCartItems([]);
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
