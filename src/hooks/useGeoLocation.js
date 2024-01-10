import { useEffect, useState } from "react";

function useGeoLocation() {
  const [position, setPosition] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation)
      throw new Error("Your Browser Not Support Geoloaction!");

    navigator.geolocation.getCurrentPosition((pos) =>
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    );
  }, []);

  return { position };
}

export default useGeoLocation;
