import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "./Button";

import { useState } from "react";

const Controllers = styled.div`
  background-color: var(--color-grey-150);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 20px 40px;
  bottom: 61px;
  right: 17px;
  z-index: 1000;
  flex-direction: column;
  gap: 30px;
`;

async function createAdmins(role = "user") {
  const { error } = await supabase.auth.updateUser({
    data: {
      role,
    },
  });

  if (error) throw new Error(error.message);
}

function Development() {
  const [role, setRole] = useState("user");
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createAdmins,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.dismiss();
      toast.success(`You are ${role} now!`);
    },

    onMutate: () => toast.loading("loading..."),

    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  return (
    <Controllers>
      <h2>For Development</h2>
      <Button
        disabled={isPending}
        onClick={() => {
          setRole("admin");
          mutate("admin");
        }}
      >
        Make me admin
      </Button>
      <Button
        disabled={isPending}
        bg="var(--color-red-700)"
        bgh="var(--color-red-800)"
        onClick={() => {
          setRole("user");
          mutate("user");
        }}
      >
        Make me user
      </Button>
    </Controllers>
  );
}

export default Development;
