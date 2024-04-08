'use client'
import { useSearchParams , usePathname } from "next/navigation";
import Link from "next/link";
import DefaultButton from "./buttons/DefaultButton";



 export default function Modal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            { modal && <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-slate-200 m-auto p-8 w-4/12 rounded-[30px] fixed">
                    <Link href={pathname} className="absolute right-6 top-4 ">
                    <svg className="size-8 fill-zinc-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
                    </Link>
                    <div className="flex flex-col items-center ">
                        {/* <h3>Modal content</h3> */}
                        <div className="w-10/12 h-max">
                            <div className="flex items-center justify-center gap-x-3">
                            <svg className="size-14 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                            {/* <h3 className="text-center text-2xl text-violet-600 ">Contact me by email</h3> */}
                            </div>
                        <form className="" action="">
                            <input placeholder="Full Name" type="text" name="full-name" className="input-send-email"/>
                            <input placeholder="Email" type="email" name="email" className="input-send-email"/>
                            <input placeholder="Subject" type="text" name="subject" className="input-send-email"/>
                            <textarea  name="content" className=" h-44 input-send-email resize-none overflow-y-auto" ></textarea>
                            <DefaultButton onClick={()=>console.log("g")
                            } content="send" className="w-full">
                            <svg className="size-6 inline-block mt-1 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path></svg>
                            </DefaultButton>
                        </form>
                        </div>
                        <br/>
                        {/* <Link href={pathname}>
                        <button type="button" className="bg-red-500 text-white p-2 ">Close Modal</button>
                        </Link> */}
                    </div>

                </div>
            </dialog>}
        </>
    );
}

