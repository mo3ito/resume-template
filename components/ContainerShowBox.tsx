import React from "react";

type ContainerShowBoxProps = {
    children: React.ReactNode;
};

export default function ContainerShowBox({ children }: ContainerShowBoxProps) {
  return (
    <div className="flex my-8 items-center  gap-x-16 gap-y-8 flex-wrap  ">
      {children}
    </div>
  );
}
