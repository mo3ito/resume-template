'use client'
import { useSearchParams , usePathname } from "next/navigation";
import Link from "next/link";
import { ContactMeModal } from "./ContactMeModal";
import useDropDownHandler from "@/hooks/useDropDownHandler";
import { useRef, useState } from "react";


 export default function MailModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();
    const containerFormRef = useRef<HTMLDivElement | null>(null)
    useDropDownHandler(containerFormRef , pathname )

    return (
        <>
            { modal && <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="container w-full h-full flex items-center justify-center relative">
                <div ref={containerFormRef} className=" absolute dark:bg-zinc-700 dark:border dark:border-pink-200 bg-slate-200 m-auto max-[400px]:p-2 p-6 sm:p-8 mx-6 sm:mx-0 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-xl sm:rounded-[30px] ">
                    <Link href={pathname} className="absolute right-6 top-4 ">
                    <svg className=" dark:fill-pink-200 size-8 fill-zinc-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
                    </Link>
                    <div className="flex flex-col items-center ">
                        <div className=" w-full sm:w-10/12 h-max">
                            <div className="flex items-center justify-center gap-x-3">
                            <svg className="size-14 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                            </div>
                        <ContactMeModal/>
                        </div>
                        <br/>
                    </div>
                </div>
                </div>
            </dialog>}
        </>
    );
}

