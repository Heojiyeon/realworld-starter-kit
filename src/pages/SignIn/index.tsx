import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const SignIn = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          {...register("email", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Email"
        />
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="password"
          type="password"
        />
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default SignIn;
