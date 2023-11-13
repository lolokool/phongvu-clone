import { Link } from "react-router-dom";
import UserIcon from "../../Svgs/userIcon";
import useAuth from "../../../hooks/useAuth";

const UserInfo = () => {
  const { user, logout: handleLogout } = useAuth();
  return (
    <>
      {user ? (
        <div>
          <p className="text-pink-300">Hi, {user.name}!!</p>
          <p className="text-pink-300" onClick={handleLogout}>
            Log out
          </p>
        </div>
      ) : (
        <div className="flex px-2">
          <UserIcon />
          <div className="login pl-2">
            <Link to="/login">
              <div className="text-color01 text-13 font-medium opacity-100 leading-20 border-transparen">
                Đăng nhập
              </div>
            </Link>
            <Link to="/register">
              <div className="text-color01 text-13 font-medium opacity-100 leading-20 border-transparen">
                Đăng kí
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
