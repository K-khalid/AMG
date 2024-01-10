import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import useLogin from "./useLogin";
import Ask from "../../ui/Ask";

function LoginForm() {
  const { register, formState, handleSubmit, reset } = useForm();

  const { login, isLoading } = useLogin();

  const errors = formState.errors;

  function onSubmit({ email, password }) {
    if (!email || !password) return;
    login({ email, password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={"Email"} error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Email Required",
          })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label={"Password"} error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "Password Required",
            minLength: {
              value: 8,
              message: "password must be atLeast 8 characters",
            },
          })}
          disabled={isLoading}
        />
      </FormRow>

      <Ask question="Don't have account ?" link="signup" to="/signup" />

      <Button r={6} disabled={isLoading}>
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
