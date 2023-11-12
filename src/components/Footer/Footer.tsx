import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import ContactMethod, { ContactMethodProps } from "./ContactMethod";

const contactMethods: ContactMethodProps[] = [
  {
    header: "Email",
    method: "mailto",
    icon: <Mail />,
    text: "hawaiilive@outlook.com",
  },
  {
    header: "Phone",
    method: "tel",
    icon: <Phone />,
    text: "+46705453110",
  },
];

function Footer() {
  return (
    <div className="h-24 w-full flex justify-center items-center text-white">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-white font-sans text-center">
          Contact
        </h2>
        <div className="flex flex-row justify-between gap-8">
          {contactMethods.map((method) => (
            <ContactMethod key={method.header} method={method} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
