import React from "react";
import Introducer from "../Introducer";
import { ContactMeSectionProps } from "@/types/refTypes";
import ContactMeBox from "../mail/ContactMeBox";

export default function CnontactMeSection(props: ContactMeSectionProps) {
  return (
    <div className="  lg:py-20" ref={props.contactRef}>
      <Introducer keyWords="Contact" header="Communication and cooperation" />
      <ContactMeBox />
    </div>
  );
}
