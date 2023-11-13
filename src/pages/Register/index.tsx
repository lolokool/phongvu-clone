import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../../data";
import useAuth from "../../hooks/useAuth";

export default function Register() {
  const { register: handleRegister } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>();
  const onRegister = async (data: RegisterRequest) => {
    await handleRegister(data);
    navigate("/login");
  };

  return (
    <div
      className="w-1200 h-[100vh] mx-auto
     relative"
    >
      <div className="w-full absolute top-[45%] px-[50px]">
        <form
          onSubmit={handleSubmit(onRegister)}
          className="flex flex-col gap-y-2"
        >
          <input
            {...register("name", {
              required: "UserName is required",
            })}
            type="text"
            name="name"
            placeholder="UserName"
            className="px-4 py-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500">{`${errors.name.message}`}</p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded"
            name="email"
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
            name="password"
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
