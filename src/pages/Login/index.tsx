import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { LoginRequest } from "../../data";

export default function Login() {
  const navigate = useNavigate();
  const { login: handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmit = async (data: LoginRequest) => {
    const res = await handleLogin(data);
    console.log("asdsad", res);
    if (res) {
      navigate("/");
    }
  };

  return (
    <div
      className="w-1200 h-[100vh] mx-auto
     relative"
    >
      <div className="w-full absolute top-[45%] px-[50px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 3,
                message: "Password must be at least 3 characters",
              },
            })}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded"
          />

          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
          <button
            type="submit"
            className="bg-blue disabled:bg-gray py-2 rounded w-[25%] mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
