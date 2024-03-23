import { useEffect, useRef } from "react";

export function useClickOutside(action, listenInCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) action();
      }
      document.addEventListener("click", handleClick, listenInCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenInCapturing);
    },
    [action, listenInCapturing]
  );

  return { ref };
}
