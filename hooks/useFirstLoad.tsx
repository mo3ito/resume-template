import { Dispatch, SetStateAction, useEffect } from "react";

const useFirstLoad = (
  firstLoad: boolean, setFirstLoad: Dispatch<SetStateAction<boolean>>, active: string , idName : string) => {

  useEffect(() => {
    setFirstLoad(true);
  }, []);

  useEffect(() => {
    if (firstLoad && active && idName) {
      document.querySelector(idName)?.classList.add(active);
    } else {
      document.querySelector(idName)?.classList.remove(active);
    }
  }, [firstLoad , active , idName]);
};

export default useFirstLoad;
