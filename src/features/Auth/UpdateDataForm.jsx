import { useState } from "react";
import useUpateUser from "./useUpateUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useUser from "./useUser";
import InputFile from "../../ui/InputFile";
import InputLabel from "../../ui/InputLabel";

function UpdateDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: userName },
    },
  } = useUser();
  const [fullName, setFullName] = useState(userName);
  const [avatar, setAvatar] = useState("");
  const { updateUser, isUpdating } = useUpateUser();
  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName && !avatar) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }
  return (
    <Form bg={"var(--color-grey-100)"} onSubmit={handleSubmit}>
      <FormRow label={"Your email"}>
        <Input id="email" type="text" value={email} disabled={true} />
      </FormRow>
      <FormRow label={"Your name"}>
        <Input
          type="text"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label={"Select image"}>
        <InputFile
          id="image"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
        <InputLabel htmlFor="image">Choose File</InputLabel>
      </FormRow>
      <Button r={6} disabled={isUpdating}>
        Update Data
      </Button>
    </Form>
  );
}

export default UpdateDataForm;
