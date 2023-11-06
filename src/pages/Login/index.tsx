import axios from "axios";
import { useForm, type FieldValues } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
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

          <input
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords must match",
            })}
            type="password"
            placeholder="Confirm password"
            className="px-4 py-2 rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
          )}

          <button
            disabled={isSubmitting}
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
