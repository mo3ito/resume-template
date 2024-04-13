import React from "react";

type ShowBoxProps = {
  value: number | string;
  contentValue: string;
};

export default function ShowBox(props: ShowBoxProps) {
  return (
    <div className=" dark:text-pink-200 w-48 h-20 sm:w-64 sm:h-24 xl:w-80 xl:h-36 rounded-[30px] border-2 text-purple-700 border-zinc-300 flex items-center justify-center flex-col gap-y-1 font-semibold shadow-sm">
      <div className=" text-4xl sm:text-5xl lg:text-5xl xl:text-7xl">{props.value}</div>
      <div className=" text-base sm:text-lg lg:text-xl dark:text-zinc-300 text-black opacity-75  dark:opacity-100">{props.contentValue}</div>
    </div>
  );
}
