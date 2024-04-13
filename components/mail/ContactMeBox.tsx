import { useRef, useState } from "react";
import DefaultButton from "../buttons/DefaultButton";
import sendMailHandler from "@/utils/sendMailHandler";
import { useRouter } from "next/navigation";
import InputForEmailForm from "../share/InputForEmailForm";

export default function ContactMeBox() {
  const [isLoadingForResponse, setIsLoadingForResponse] =
    useState<boolean>(false);
  const mailFormRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  return (
    <form
      ref={mailFormRef}
      className="w-full mt-6 "
      action={() =>
        sendMailHandler(setIsLoadingForResponse, mailFormRef, router)
      }
    >
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-y-8">
        <InputForEmailForm
          className=" w-full md:w-1/2"
          classNameInput=" w-full md:w-11/12"
          type="text"
          placeholder="Full Name*"
          name="user-full-name"
        />
        <InputForEmailForm
          required={true}
          classNameInput="w-full"
          className=" w-full md:w-1/2"
          type="email"
          placeholder="Email Address*"
          name="user-email"
        />
        <InputForEmailForm
          className=" w-full lg:w-1/2"
          classNameInput="w-full"
          type="text"
          placeholder="Subject*"
          name="user-subject"
        />
        <textarea
          name="user-message"
          placeholder="a few words*"
          className="dark:focus:border-pink-200 dark:border-zinc-600 resize-none font-bold outline-none focus:border-b-2 focus:border-purple-700 border-b-2 border-zinc-300 w-full text-sm sm:text-base lg:text-xl  bg-transparent h-36 overflow-auto"
        ></textarea>
      </div>
      <DefaultButton
        isLoading={isLoadingForResponse}
        content="Send Message"
        className=" dark:text-black w-44  lg:w-80 my-8 text-white h-12 lg:h-16"
      >
        <svg
          className=" size-4  lg:size-6 inline-block  ml-2 fill-white dark:fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
        </svg>
      </DefaultButton>
    </form>
  );
}
