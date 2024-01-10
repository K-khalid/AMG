import { useEffect, useRef } from "react";

function useOutsideClick2(close) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }

    document.documentElement.addEventListener("click", handleClick, true);

    return () =>
      document.documentElement.removeEventListener("click", handleClick, true);
  }, [close]);

  return { ref };
}

export default useOutsideClick2;
