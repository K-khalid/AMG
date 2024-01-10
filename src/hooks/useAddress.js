import { useMutation } from "@tanstack/react-query";
import { getAddress as getAddressApi } from "../services/locations";
import useGeoLocation from "./useGeoLocation";
import toast from "react-hot-toast";
import { useState } from "react";

function useAddress() {
  const { position } = useGeoLocation();
  const [Address, setAddress] = useState("");
  const { mutate: getAddress, isPending: fetchingAddress } = useMutation({
    mutationFn: () => getAddressApi(position),

    onSuccess: (data) => {
      toast.dismiss();
      setAddress(data.countryName + "/" + data.city + "/" + data.locality);
    },

    onMutate: () => toast.loading("Getting your address..."),

    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  return { getAddress, fetchingAddress, Address, setAddress };
}

export default useAddress;
