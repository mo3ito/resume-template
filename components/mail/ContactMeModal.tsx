import { useRef, useState } from "react";
import DefaultButton from "../buttons/DefaultButton";
import { useRouter } from "next/navigation";
import sendMailHandler from "@/utils/sendMailHandler";

export const ContactMeModal = () => {
  const [isLoadingForResponse, setIsLoadingForResponse] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();


  return (
    <form ref={formRef} className="" action={()=>sendMailHandler(setIsLoadingForResponse , formRef , router)}>
      <input
        placeholder="Full Name"
        type="text"
        name="user-full-name"
        className="input-send-email"
      />
      <input
        required
        placeholder="Email"
        type="email"
        name="user-email"
        className="input-send-email"
      />
      <input
        placeholder="Subject"
        type="text"
        name="user-subject"
        className="input-send-email"
      />
      <textarea
        name="user-message"
        className=" h-44 input-send-email resize-none overflow-y-auto"
      ></textarea>
      <DefaultButton
        isLoading={isLoadingForResponse}
        content="send"
        className="w-full text-white dark:text-black"
      >
        <svg
          className="size-6 inline-block  ml-2 fill-white dark:fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          
        >
          <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
        </svg>
      </DefaultButton>
    </form>
  );
};
