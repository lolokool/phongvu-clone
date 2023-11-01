import UserIcon from "../../Svgs/userIcon";

const Login = () => {
  return (
    <div className="flex px-2">
      <UserIcon />
      <div className="login pl-2">
        <div className="text-color01 text-13 font-medium opacity-100 leading-20 border-transparen">
          Đăng nhập
        </div>
        <div className="text-color01 text-13 font-medium opacity-100 leading-20 border-transparen">
          Đăng kí
        </div>
      </div>
    </div>
  );
};

export default Login;
