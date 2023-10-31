import { useEffect, useRef } from "react";

let counter = 0;

const useDidMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    // console.log("counter är " + counter);
    if (didMount.current) func();
    else {
      if (counter < 2) {
        counter += 1;
      } else {
        didMount.current = true;
        counter = 0;
      }
    }
  }, deps);
};

export default useDidMountEffect;
