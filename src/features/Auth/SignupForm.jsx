import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useSignup from "./useSignup";

import Ask from "../../ui/Ask";

function SignupForm() {
  const { reset, handleSubmit, register, formState } = useForm();

  const { signup, isLoading } = useSignup();
  const errors = formState.errors;

  function onSubmit(data) {
    signup({ ...data, fullName: data.name }, { onSettled: () => reset });
  }

  return (
    <Form gap={35} onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={"Your Name"} error={errors?.name?.message}>
        <Input
          id="name"
          {...register("name", {
            required: "Name required",
          })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label={"Email"} error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Email required",
          })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label={"Password"} error={errors?.password?.message}>
        <Input
          id="password"
          type="password"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 8,
              message: "Too short password!",
            },
          })}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow
        label={"Password Confirm"}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm", {
            required: "Password Confirm required",

            validate: (value, formOpts) => {
              return value === formOpts.password || "Passwords not correct";
            },
          })}
          disabled={isLoading}
        />
      </FormRow>
      <Ask question="already have account ?" link="login" to="/AMG/login" />

      <Button r={6} disabled={isLoading}>
        Confirm
      </Button>
    </Form>
  );
}

export default SignupForm;
