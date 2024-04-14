import { useEffect } from "react";


const useFirstLoad = (firstLoad: boolean) => {
  useEffect(() => {
    if (firstLoad) {
      document.querySelector("#home-item")?.classList.add("active");
    } else {
      document.querySelector("#home-item")?.classList.remove("active");
    }
  }, [firstLoad]);
};

export default useFirstLoad;
