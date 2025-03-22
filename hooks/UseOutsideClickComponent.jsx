import { useEffect, useRef } from "react";

const UseOutsideClickComponent = ({ onOutsideClick, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      onOutsideClick(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [onOutsideClick]);

  return <div ref={ref}>{children}</div>;
};

export default UseOutsideClickComponent;
