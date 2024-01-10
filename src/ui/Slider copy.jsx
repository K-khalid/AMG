import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "./Image";

const testArray = [
  "/Home Images/1.png",
  "/Home Images/2.png",
  "/Home Images/3.png",
  "/Home Images/4.png",
];
function ImageSlider() {
  const [number, setNumber] = useState(0);

  useEffect(
    function () {
      const id = setInterval(() => {
        if (number === testArray.length - 1) return setNumber(0);
        if (number < testArray.length - 1) return setNumber((n) => n + 1);
      }, 4000);

      return () => {
        clearInterval(id);
      };
    },

    [number]
  );

  return (
    <AnimatePresence mode="wait">
      {<Image src={testArray[number]} key={number} />}
    </AnimatePresence>
  );
}

export default ImageSlider;
