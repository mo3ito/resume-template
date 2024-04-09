import { useEffect } from "react";
import { useRouter } from "next/navigation";



const useDropDownHandler = <T extends HTMLElement | null>(
  refName: React.RefObject<T>,
  path: string
) => {
  const router = useRouter()
  useEffect(() => {
    const dropDownHandler = (event: MouseEvent) => {
      if (refName && refName?.current) {
        if (!refName?.current.contains(event.target as Node)) {
          router.push(path)
        }
      }
    };

    document.body.addEventListener("click", dropDownHandler);
    return () => document.body.removeEventListener("click", dropDownHandler);
  }, []);
};

export default useDropDownHandler;
