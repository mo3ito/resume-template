import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { RefObject, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const sendMailHandler = async (
  setIsLoadingForResponse: React.Dispatch<SetStateAction<boolean>>,
  formRef: RefObject<HTMLFormElement | null>,
  router: AppRouterInstance
) => {
  await setIsLoadingForResponse(true);
  try {
    if (formRef?.current) {
      setIsLoadingForResponse(true);
      await emailjs.sendForm(
        "service_id",
        "template_id",
        formRef.current,
        {
          publicKey: "publick_key",
        }
      );
      formRef.current.reset();
      router.push("/");
      toast.success("your message sent successfuly");
      setIsLoadingForResponse(false);
    } else {
      setIsLoadingForResponse(false);
      router.push("/");
      toast.error("unsuccessfully");
    }
  } catch (error) {
    console.log("FAILED...", error);
    setIsLoadingForResponse(false);
    router.push("/");
    toast.error("something wrong");
  }
};

export default sendMailHandler;
