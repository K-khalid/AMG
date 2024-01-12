import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUpateUser from "./useUpateUser";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useThemes } from "../../context/ThemesContext";
import styled from "styled-components";

const ColorsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: var(--color-grey-180);
  .orange {
    background-color: orange;
  }

  .green {
    background-color: #006100;
  }

  .blue {
    background-color: cyan;
  }

  .magenta {
    background-color: magenta;
  }
`;

const Balls = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 35%;
  filter: ${(props) => `hue-rotate(${props.angle}deg)`};
  cursor: pointer;
  transition: 0.5s transform;
  &:hover,
  &.active {
    transform: scale(1.15);
  }
`;

function UpdatePasswordForm() {
  const { changeColor, angle } = useThemes();
  const { register, handleSubmit, reset } = useForm();
  const { updateUser, isUpdating } = useUpateUser();

  function showErrors(err) {
    const errorName = Object.keys(err)[0];
    toast.dismiss();
    if (err[errorName]) toast.error(err[errorName].message);
  }
  function onSubmit({ password }) {
    updateUser({ password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, showErrors)}>
      <FormRow label="New password">
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 8,
              message: "Too short password",
            },
          })}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Confirm password">
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "Confirm password required",
            minLength: {
              value: 8,
              message: "Too short password",
            },
            validate: (value, formData) =>
              value === formData?.password || "not same as password",
          })}
          disabled={isUpdating}
        />
      </FormRow>
      <ColorsContainer>
        <Balls
          angle={-angle}
          onClick={(e) => changeColor(e, 35)}
          className={`magenta ${angle === 65 && "active"}`}
        />
        <Balls
          angle={-angle}
          onClick={(e) => changeColor(e, 290)}
          className={`orange ${angle === 290 && "active"}`}
        />
        <Balls
          angle={-angle}
          onClick={(e) => changeColor(e, 25)}
          className={`blue ${angle === 25 && "active"}`}
        />
        <Balls
          angle={-angle}
          onClick={(e) => changeColor(e, 0)}
          className={`green ${angle === 0 && "active"}`}
        />
      </ColorsContainer>

      <Button disabled={isUpdating} r={6}>
        Updata Password
      </Button>
    </Form>
  );
}

export default UpdatePasswordForm;
