import Maketing from "./Maketing";
import Login from "./LoginRegister";
import Cart from "./Cart";
import Notification from "./Notify";
import Logo from "./Logo";
import Search from "./Search";

const HeaderComponent = () => {
  return (
    <>
      <div className="">
        <Maketing />
      </div>
      <div className="sticky top-0 z-50 bg-[#f8f8fc]">
        <div className="w-1200 mx-auto">
          <div className=" flex justify-center  items-center">
            <Logo />
            <Search />
            <Login />
            <Notification />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
