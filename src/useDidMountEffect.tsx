import { useEffect, useRef } from "react";

let counter = 0;

const useDidMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else {
      if (counter === 0) {
        counter = 1;
      } else {
        didMount.current = true;
        counter = 0;
      }
    }
  }, deps);
};

export default useDidMountEffect;
