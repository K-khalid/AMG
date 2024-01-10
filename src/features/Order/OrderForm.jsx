import { useForm } from "react-hook-form";
import useUser from "../Auth/useUser";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCreateOrder from "./useCreateOrder";
import useUpdateOrder from "./useUpdateOrder";
import useAddress from "../../hooks/useAddress";
import styled from "styled-components";

const AddressBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
  border: none;
  background-color: goldenrod;
  color: white;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 6px;
  transition: 0.5s;

  @media (max-width: 778px) {
    top: 70%;
  }
`;

function OrderForm({ onClose, order = {} }) {
  const userEmail = useUser()?.user?.email;
  const { id } = order;
  const { isAuthanticated, isLoading } = useUser();
  const { getAddress, fetchingAddress, Address, setAddress } = useAddress();
  const { createOrder, isCreating } = useCreateOrder(onClose);
  const { updateOrder, isUpdating } = useUpdateOrder(onClose);
  const navigate = useNavigate();
  const { register, handleSubmit, clearErrors, getValues } = useForm({
    defaultValues: id
      ? { ...order }
      : { requestedBy: userEmail, address: Address }, // address: Address || order?.address
    values: id ? { ...order } : { requestedBy: userEmail, address: Address },
  });
  console.log(Address);
  useEffect(
    function () {
      if (!isLoading && !isAuthanticated) {
        navigate("/login");
        toast.error("Login first to make an order");
      }
    },
    [isAuthanticated, navigate, isLoading]
  );

  function onSubmit(data) {
    if (id) {
      return updateOrder({ dataInfo: { ...data }, id: id });
    }

    return createOrder({ dataInfo: { ...data } });
  }

  function onError(errors) {
    let errorName = Object.values(errors)?.at(0)?.message;
    toast.error(errorName);
    // reset(
    //   {
    //     ...errors,
    //   },
    //   { keepValues: true }
    // );
    clearErrors();
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      gap="25"
      mt={0}
      p="25px 30px"
    >
      <Heading mt={7} fs="30" align="center" width="25%">
        {id ? "Update Order" : "Make Order"}
      </Heading>
      <FormRow label="Email">
        <Input
          type="text"
          {...register("requestedBy")}
          disabled={userEmail}
          id="userName"
          defaultValue={userEmail}
        />
      </FormRow>
      <FormRow label="Company name">
        <Input
          id="company"
          type="text"
          {...register("company", { required: "Company name required" })}
        />
      </FormRow>
      <FormRow label="Mobile">
        <Input
          id="mobile"
          type="text"
          {...register("mobile", {
            required: "Mobile required",
            pattern: {
              value: /^01[0125]\d{8}$/, // +20 1159212089
              message: "Invalid mobile number",
            },
          })}
        />
      </FormRow>
      <FormRow label="Address">
        <Input
          id="address"
          type="text"
          {...register("address", {
            required: "Address required",
            onChange: (e) => setAddress(e.target.value),
          })}
        />

        {!id && (
          <AddressBtn
            style={{
              opacity: getValues().address ? 0 : 1,
              zIndex: getValues().address ? -100 : 1000,
            }}
            onClick={(e) => {
              e.preventDefault();
              getAddress();
            }}
            disabled={isCreating || isUpdating || fetchingAddress}
          >
            Get Address
          </AddressBtn>
        )}
      </FormRow>

      <TextArea
        id="details"
        placeholder="Provide more details if you want...📝"
        {...register("details")}
        maxLength={70}
      />

      <div
        style={{
          alignItems: "center",
          gap: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={isCreating || isUpdating || fetchingAddress}
          bg="var(--color-red-700)"
          width="fit-content"
          type="reset"
        >
          Reset
        </Button>
        <Button
          disabled={isCreating || isUpdating || fetchingAddress}
          width="fit-content"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default OrderForm;
