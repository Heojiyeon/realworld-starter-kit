import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default SignUp;
