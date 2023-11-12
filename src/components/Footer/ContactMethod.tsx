import Link from "next/link";
import React from "react";

export type ContactMethodProps = {
  text: string;
  method: string;
  header: string;
  icon: React.ReactNode;
};

function ContactMethod({
  method: { header, method, icon, text },
}: {
  method: ContactMethodProps;
}) {
  return (
    <div className="flex flex-row justify-start items-center gap-4">
      {icon}
      <h2 className="font-bold text-lg">{header}:</h2>
      <Link href={`${method}:${text}`}>
        <p className="text-blue-500 text-lg">{text}</p>
      </Link>
    </div>
  );
}

export default ContactMethod;
