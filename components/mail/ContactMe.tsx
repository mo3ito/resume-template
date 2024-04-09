import { LegacyRef , useRef , RefObject} from 'react';
import emailjs from '@emailjs/browser';
import DefaultButton from '../buttons/DefaultButton';
import { useRouter } from 'next/navigation';


export const ContactMe = () => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const router = useRouter()

const sendEmail = async () => {
    try {
      if (formRef.current) {
        await emailjs.sendForm('service_264s7x2', 'template_3h472ui',  formRef.current, {
          publicKey: 'S1i02YYSBA6oGu2RM',
        });
        router.push("/")
       alert("success")

      } else {
        console.log('Form reference is null!');
      }
    } catch (error) {
      console.log('FAILED...', error);
    }
  };
  

  return (
    <form ref={formRef} className="" action={sendEmail}>
    <input placeholder="Full Name" type="text" name="full-name" className="input-send-email"/>
    <input placeholder="Email" type="email" name="email" className="input-send-email"/>
    <input placeholder="Subject" type="text" name="subject" className="input-send-email"/>
    <textarea  name="content" className=" h-44 input-send-email resize-none overflow-y-auto" ></textarea>
    <DefaultButton  content="send" className="w-full">
    <svg className="size-6 inline-block mt-1 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path></svg>
    </DefaultButton>
</form>
  );
};