import React from "react";
import Introducer from "../Introducer";
import { ContactMeSectionProps } from "@/types/refTypes";
import ContactMeBox from "../mail/ContactMeBox";

export default function CnontactMeSection(props: ContactMeSectionProps) {
  return (
    <div className="lg:pt-24 pb-20 pt-6" ref={props.contactRef}>
      <Introducer keyWords="Contact" header="Communication and cooperation" />
      <ContactMeBox />
    </div>
  );
}
