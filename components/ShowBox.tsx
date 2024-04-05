import React from "react";

type ShowBoxProps = {
  value: number | string;
  contentValue: string;
};

export default function ShowBox(props: ShowBoxProps) {
  return (
    <div className="w-80 h-36 rounded-[30px] border-2 border-zinc-300 flex items-center justify-center flex-col gap-y-2 font-semibold shadow-sm">
      <div className="text-7xl">{props.value}</div>
      <div className="text-xl text-black opacity-75 dark:text-white dark:opacity-100">{props.contentValue}</div>
    </div>
  );
}
